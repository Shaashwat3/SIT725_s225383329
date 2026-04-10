document.addEventListener('DOMContentLoaded', async () => {
  const booksList = document.getElementById('books-list');

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
          <div class="book-card">
            <h2 class="book-title">${book.title}</h2>
            <p class="book-author"><strong>Author:</strong> ${book.author}</p>
            <p class="book-price"><strong>Price (AUD):</strong> $${book.price}</p>
          </div>
        `
      )
      .join('');
  } catch (error) {
    console.error('Error fetching books:', error);
    booksList.innerHTML = '<p>Failed to load books.</p>';
  }
});