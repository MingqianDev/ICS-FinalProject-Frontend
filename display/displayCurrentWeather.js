export function displayCurrentWeather(data){
    document.querySelector('#temperature').textContent = data.currentWeather.temperature + '°C';
    document.querySelector('#weather').textContent = data.currentWeather.weather;
    document.querySelector('#weather-icon').src = `../icon/${data.currentWeather.icon}.png`;
    // document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${day.icon}.png`;
    

}