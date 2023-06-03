import { getGlobal, setGlobal } from '../globals.js';
import { getLocation } from '../getLocation.js';

const socket = io("http://localhost:3000");
setGlobal('socket', socket);

socket.on('cityData', (data) => {
    document.querySelector('#location').textContent = data;
})

socket.on('weatherData', (data) => {
    document.querySelector('#description').textContent = data.description;
    document.querySelector('#temperature').textContent = data.temperature + '°C';
})