# GCP Path

A React application built with Vite that tracks your GCP learning roadmap progress in a database.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (for browser-compatible connection)
- MongoDB Atlas Data API enabled

### Setup

1. **Install Dependencies**

```bash
npm install
```

2. **Set Up MongoDB Atlas Data API**

Since MongoDB doesn't support direct browser connections, we use MongoDB Atlas Data API:

1. Go to your MongoDB Atlas dashboard
2. Navigate to **App Services** → **Data API**
3. Enable the Data API
4. Create an API Key
5. Note your Data API URL and API Key

3. **Configure Environment Variables**

Create a `.env` file in the root directory:

```env
# MongoDB connection string (for reference, not used directly in browser)
VITE_DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/gcp_path

# MongoDB Atlas Data API (required for browser connection)
VITE_DATA_API_URL=https://data.mongodb-api.com/app/your-app-id/endpoint/data/v1
VITE_DATA_API_KEY=your-api-key-here
VITE_DATA_SOURCE=Cluster0
```

**Where to find these values:**
- `VITE_DATA_API_URL`: Found in MongoDB Atlas → App Services → Data API → Endpoint URL
- `VITE_DATA_API_KEY`: Found in MongoDB Atlas → App Services → Data API → API Keys
- `VITE_DATA_SOURCE`: Your cluster name (usually `Cluster0`)

4. **Start the Frontend**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Database Schema

The server will automatically create the `progress` collection on first run. Documents in the collection have the following structure:

```javascript
{
  _id: ObjectId,
  item_id: String (unique, indexed),
  completed: Boolean,
  created_at: Date,
  updated_at: Date
}
```

The `item_id` field is automatically indexed for fast lookups.

### Development

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

**Backend:**
- Direct MongoDB connection via Atlas Data API
- No separate backend server needed

## Features

- ✅ 6-month GCP learning roadmap
- ✅ Progress tracking stored in database
- ✅ Real-time progress updates
- ✅ Responsive design
- ✅ Automatic database collection creation
- ✅ Indexed queries for fast performance

