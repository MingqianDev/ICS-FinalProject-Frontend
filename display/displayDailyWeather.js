// displayDailyWeather.js
export function displayDailyWeather(data) {
  const weatherContainer = document.querySelector("#forecast-container");
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  data.weatherData.forecastData.forEach((day, index) => {
    // Create container for each day
    const dailyWeatherCard = document.createElement("div");
    dailyWeatherCard.classList.add("daily-weather-card");
    // dailyWeatherCard.href = `detail.html?date=${day.date}&page=${index}`;
    
    // Add content to the dailyWeatherCard
    dailyWeatherCard.innerHTML = `
        <span>${weekdays[day.date]}</span>
        <h3>${day.tempMax}&deg;/${day.tempMin}&deg;</h3>
        <img src="/icon/${day.icon}.png" alt="Weather icon">
        <p>${day.weather}</p>
      `;

    // Append dailyWeatherCard to the dailyWeatherLink and then append to the weather-container
    weatherContainer.appendChild(dailyWeatherCard);
  });
}