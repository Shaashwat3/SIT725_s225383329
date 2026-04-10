document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/books')
    .then((response) => response.json())
    .then((books) => {
      const booksList = document.getElementById('books-list');

      if (!books.length) {
        booksList.innerHTML = '<p>No books found.</p>';
        return;
      }

      booksList.innerHTML = books
        .map(
          (book) => `
            <div class="book-card">
              <h2 class="book-title">${book.title}</h2>
              <p class="book-author">Author: ${book.author}</p>
            </div>
          `
        )
        .join('');
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
      document.getElementById('books-list').innerHTML =
        '<p>Failed to load books.</p>';
    });
});