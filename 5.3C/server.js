const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books.routes');

const app = express();
const PORT = 3000;

// Hardcoded MongoDB URI as required
const MONGO_URI = 'mongodb://127.0.0.1:27017/booksdb';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', booksRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });