import { displayCurrentWeather } from './display/displayCurrentWeather.js';
import { displayDailyWeather } from './display/displayDailyWeather.js';
import { getData } from './getData.js';
import { setGlobal } from './globals.js';


async function main() {
    try {
        const data = await getData();
        displayCurrentWeather(data);
        displayDailyWeather(data);
        document.querySelector('#city').innerHTML = data.city
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

 main()