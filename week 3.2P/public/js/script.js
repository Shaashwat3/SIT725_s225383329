document.addEventListener('DOMContentLoaded', () => {

  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

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
              <div class="card-action">
                <a href="#book-modal" 
                   class="modal-trigger view-details"
                   data-title="${book.title}"
                   data-author="${book.author}"
                   data-description="${book.description}">
                   View Details
                </a>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });

      const links = document.querySelectorAll('.view-details');

      links.forEach(link => {
        link.addEventListener('click', function () {
          document.getElementById('modal-title').textContent = this.dataset.title;
          document.getElementById('modal-author').textContent = "Author: " + this.dataset.author;
          document.getElementById('modal-description').textContent = this.dataset.description;
        });
      });

    })
    .catch(error => console.error(error));
});