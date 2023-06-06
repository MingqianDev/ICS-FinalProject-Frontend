export function displayCurrentWeather(data){
    document.querySelector('#temperature').textContent = data.temperature + '°C';
    document.querySelector('#weather').textContent = data.weather;
    document.querySelector('#weather-icon').src = `../icon/${data.icon}.png`;
    // document.querySelector('#weather-icon').src = `https://openweathermap.org/img/wn/${day.icon}.png`;
    

}