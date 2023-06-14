import { displayCurrentWeather } from './display/displayCurrentWeather.js';
import { displayDailyWeather } from './display/displayDailyWeather.js';
import { getData } from './getData.js';

async function main() {
    try {
        const data = await getData();
        console.log(data);
        displayCurrentWeather(data);
        displayDailyWeather(data);
        document.querySelector('#city').innerHTML = data.city
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

 main()