// displayDailyWeather.js
export function displayDailyWeather(data) {
  const weatherContainer = document.querySelector("#forecast-container");
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  data.dailyWeather.forEach((day) => {
    // Create container for each day
    const dailyWeatherCard = document.createElement("div");
    dailyWeatherCard.classList.add("daily-weather-card");

    // Format date
    // const formattedDate = day.date.toLocaleDateString();

    // Add content to the dailyWeatherCard
    dailyWeatherCard.innerHTML = `
        <span>${weekdays[day.date]}</span>
        <h3>${day.tempMax}°/${day.tempMin}°</h3>
        <img src="/icon/${day.icon}.png" alt="Weather icon">
        <p>${day.weather}</p>
      `;

    // Append dailyWeatherCard to the weather-container in the HTML file
    weatherContainer.appendChild(dailyWeatherCard);
  });
}