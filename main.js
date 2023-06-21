import { displayCurrentWeather } from './display/displayCurrentWeather.js';
import { displayDailyWeather } from './display/displayDailyWeather.js';
import { displayHourlyWeather } from './display/displayHourlyWeather.js';
import { getData } from './getData.js';

async function main() {
    try {
        const data = await getData();
        displayCurrentWeather(data); // Display current weather data
        displayHourlyWeather(data); // Display hourly weather data
        displayDailyWeather(data); // Display daily weather data
        document.querySelector('#city').innerHTML = data.city; // Display the city name
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

main()