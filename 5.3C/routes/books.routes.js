const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');

// Required routes only
router.get('/api/books', booksController.getAllBooks);
router.get('/api/books/:id', booksController.getBookById);
router.get('/api/integrity-check42', booksController.integrityCheck42);

module.exports = router;