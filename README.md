# GCP Path

A React application built with Vite that tracks your GCP learning roadmap progress in a database.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A MongoDB database (local or cloud like MongoDB Atlas)
- DATABASE_URL in `.env` file

### Setup

1. **Install Frontend Dependencies**

```bash
npm install
```

2. **Install Backend Dependencies**

```bash
cd server
npm install
cd ..
```

3. **Configure Environment Variables**

Create a `.env` file in the root directory:

```env
DATABASE_URL=mongodb://user:password@host:port/database
PORT=3001
```

For example:
- Local MongoDB: `mongodb://localhost:27017/gcp_path`
- MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/gcp_path?retryWrites=true&w=majority`
- MongoDB with authentication: `mongodb://username:password@localhost:27017/gcp_path?authSource=admin`

4. **Start the Backend Server**

```bash
cd server
npm start
# or for development with auto-reload:
npm run dev
```

The API server will run on `http://localhost:3001`

5. **Start the Frontend**

In a new terminal:

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

**Frontend Development:**
```bash
npm run dev
```

**Backend Development:**
```bash
cd server
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
- Express.js
- MongoDB (mongodb driver)
- CORS enabled

## API Endpoints

- `GET /api/progress` - Get all completed items
- `POST /api/progress` - Save/update progress for an item
- `DELETE /api/progress` - Reset all progress

## Features

- ✅ 6-month GCP learning roadmap
- ✅ Progress tracking stored in database
- ✅ Real-time progress updates
- ✅ Responsive design
- ✅ Automatic database collection creation
- ✅ Indexed queries for fast performance

