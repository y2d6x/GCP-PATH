import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  console.error('DATABASE_URL is not set in .env file');
  process.exit(1);
}

// Initialize MongoDB connection
let client;
let db;
let progressCollection;

// Connect to MongoDB
async function connectDatabase() {
  try {
    client = new MongoClient(DATABASE_URL);
    await client.connect();
    console.log('Connected to MongoDB');
    
    // Get database name from URL or use default
    const dbName = DATABASE_URL.split('/').pop().split('?')[0] || 'gcp_path';
    db = client.db(dbName);
    progressCollection = db.collection('progress');
    
    // Create index on item_id for faster lookups
    await progressCollection.createIndex({ item_id: 1 }, { unique: true });
    
    console.log('Database initialized');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}

// Initialize database connection
connectDatabase();

// Get all progress
app.get('/api/progress', async (req, res) => {
  try {
    const completedItems = await progressCollection
      .find({ completed: true })
      .project({ item_id: 1, _id: 0 })
      .toArray();
    
    const result = completedItems.map(item => item.item_id);
    
    res.json({ completedItems: result });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

// Save progress (upsert)
app.post('/api/progress', async (req, res) => {
  try {
    const { itemId, completed } = req.body;
    
    if (!itemId) {
      return res.status(400).json({ error: 'itemId is required' });
    }
    
    await progressCollection.updateOne(
      { item_id: itemId },
      {
        $set: {
          item_id: itemId,
          completed: completed !== false,
          updated_at: new Date()
        },
        $setOnInsert: {
          created_at: new Date()
        }
      },
      { upsert: true }
    );
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// Reset all progress
app.delete('/api/progress', async (req, res) => {
  try {
    await progressCollection.deleteMany({});
    res.json({ success: true });
  } catch (error) {
    console.error('Error resetting progress:', error);
    res.status(500).json({ error: 'Failed to reset progress' });
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Closing database connection...');
  if (client) {
    await client.close();
  }
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
