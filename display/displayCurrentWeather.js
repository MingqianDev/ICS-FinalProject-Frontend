export function displayCurrentWeather(data) {
    document.querySelector('#temperature').innerHTML = `${data.weatherData.temperature}&deg;C`;// Display current temperature
    document.querySelector('#weather').textContent = data.weatherData.weather; // Display current weather description
    document.querySelector('#weather-icon').src = `../icon/${data.weatherData.icon}.png`;// Display current weather icon
}