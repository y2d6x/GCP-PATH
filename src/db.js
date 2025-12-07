// Connect to MongoDB via backend API
// The backend server handles the MongoDB connection

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Get all completed items
export async function getProgress() {
  try {
    const response = await fetch(`${API_URL}/api/progress`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch progress');
    }
    
    const data = await response.json();
    return data.completedItems || [];
  } catch (error) {
    console.error('Error fetching progress:', error);
    throw error;
  }
}

// Save progress (upsert)
export async function saveProgress(itemId, completed) {
  try {
    const response = await fetch(`${API_URL}/api/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemId: itemId,
        completed: completed !== false,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save progress');
    }
  } catch (error) {
    console.error('Error saving progress:', error);
    throw error;
  }
}

// Reset all progress
export async function resetProgress() {
  try {
    const response = await fetch(`${API_URL}/api/progress`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to reset progress');
    }
  } catch (error) {
    console.error('Error resetting progress:', error);
    throw error;
  }
}
