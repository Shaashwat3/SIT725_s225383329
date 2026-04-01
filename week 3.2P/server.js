const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "images/image1.jpg",
    description: "A practical guide to building good habits and breaking bad ones."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "images/image2.jpg",
    description: "A philosophical novel about following your dreams."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "images/image3.jpg",
    description: "A book about focus, productivity, and meaningful work."
  }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});