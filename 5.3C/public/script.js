const booksList = document.getElementById('books-list');
const bookDetails = document.getElementById('book-details');

const loadBookDetails = async (id) => {
  try {
    const response = await fetch(`/api/books/${id}`);
    const book = await response.json();

    bookDetails.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>ID:</strong> ${book.id}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Price (AUD):</strong> $${book.price}</p>
      <p><strong>Summary:</strong> ${book.summary}</p>
    `;
  } catch (error) {
    console.error('Error fetching book details:', error);
    bookDetails.innerHTML = '<p>Failed to load book details.</p>';
  }
};

const loadBooks = async () => {
  try {
    const response = await fetch('/api/books');
    const books = await response.json();

    if (!books.length) {
      booksList.innerHTML = '<p>No books found.</p>';
      return;
    }

    booksList.innerHTML = books
      .map(
        (book) => `
          <div class="book-card" data-id="${book.id}">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author"><strong>Author:</strong> ${book.author}</p>
          </div>
        `
      )
      .join('');

    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach((card) => {
      card.addEventListener('click', async () => {
        const bookId = card.getAttribute('data-id');

        bookCards.forEach((item) => item.classList.remove('active'));
        card.classList.add('active');

        await loadBookDetails(bookId);
      });
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    booksList.innerHTML = '<p>Failed to load books.</p>';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadBooks();
});