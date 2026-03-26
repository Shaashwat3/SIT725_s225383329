const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for books
const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "images/book1.jpg",
    description: "A practical guide to building good habits and breaking bad ones."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "images/book2.jpg",
    description: "A philosophical novel about following your dreams."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "images/book3.jpg",
    description: "A book about focus, productivity, and meaningful work."
  }
];

// REST endpoint
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});