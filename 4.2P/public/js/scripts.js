const addCards = (items) => {
  items.forEach((item) => {
    const card = `
      <div class="card">
        <img src="${item.thumbnail}" alt="${item.resourceName}">
        <div class="card-content">
          <h3>${item.resourceName}</h3>
          <p><strong>Subject:</strong> ${item.subject}</p>
          <p><strong>Difficulty:</strong> ${item.difficulty}</p>
          <p><strong>Week:</strong> ${item.week}</p>
        </div>
      </div>
    `;
    $("#card-section").append(card);
  });
};

const getResources = () => {
  $.get("/api/resources", (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  getResources();
});