import { getGlobal, setGlobal } from '../globals.js';
import { getLocation } from '../getLocation.js';
import { displayDailyWeather } from '../display/displayDailyWeather.js';
import { displayCurrentWeather } from '../display/displayCurrentWeather.js';


// const socket = io("http://localhost:3000");
const socket = io("localhost:3000");

setGlobal('socket', socket);

socket.on('cityData', (data) => {
    document.querySelector('#location').textContent = data;
})

socket.on('currentWeatherData', (data) => {
    displayCurrentWeather(data);
})

// socket.on('weatherForecastData', (data) => {
//     displayDailyWeather(data);
//     console.log("success");
// })