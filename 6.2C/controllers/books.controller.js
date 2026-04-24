const booksService = require('../services/books.service');

const formatBook = (book) => {
  return {
    id: book.id,
    title: book.title,
    author: book.author,
    year: book.year,
    genre: book.genre,
    summary: book.summary,
    price: book.price.toString()
  };
};

const getAllBooks = async (req, res) => {
  try {
    const books = await booksService.getAllBooks();
    const formattedBooks = books.map(formatBook);
    res.json(formattedBooks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books' });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await booksService.getBookById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(formatBook(book));
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch book' });
  }
};

const integrityCheck42 = (req, res) => {
  res.status(204).send();
};

module.exports = {
  getAllBooks,
  getBookById,
  integrityCheck42
};