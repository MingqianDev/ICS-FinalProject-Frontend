export function displayCurrentWeather(data){
    document.querySelector('#temperature').innerHTML = `${data.weatherData.temperature}&deg;C`;
    document.querySelector('#weather').textContent = data.weatherData.weather;
    document.querySelector('#weather-icon').src = `../icon/${data.weatherData.icon}.png`;
    // document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${day.icon}.png`;
    

}