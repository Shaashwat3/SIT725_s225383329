fetch('/api/books')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('book-container');

    data.forEach(book => {
      const card = `
        <div class="col s12 m6 l4">
          <div class="card hoverable">
            <div class="card-image">
              <img src="${book.image}" alt="${book.title}">
              <span class="card-title">${book.title}</span>
            </div>
            <div class="card-content">
              <p><strong>Author:</strong> ${book.author}</p>
              <p>${book.description}</p>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  })
  .catch(error => {
    console.error('Error fetching books:', error);
  });