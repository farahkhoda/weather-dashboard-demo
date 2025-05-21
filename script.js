const cities = ["Rome", "London", "New York"];
const apiKey = "1d31ec23891b136e16b100c6c04b3183";

const container = document.querySelector(".card-container");

cities.forEach(city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const card = document.createElement("div");
      card.className = "weather-card";

      card.innerHTML = `
        <h2>${data.name}</h2>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        <div class="temperature">${Math.round(data.main.temp)}°C</div>
        <p class="description">${data.weather[0].description}</p>
      `;

      container.appendChild(card);
    })
    .catch(error => {
      const errorCard = document.createElement("div");
      errorCard.className = "weather-card";
      errorCard.innerHTML = `<h2>${city}</h2><p>Error loading data</p>`;
      container.appendChild(errorCard);
      console.error(`Error loading ${city}:`, error);
    });
});
