import { displayCurrentWeather } from './display/displayCurrentWeather.js';
import { displayDailyWeather } from './display/displayDailyWeather.js';
import { getData } from './getData.js';

async function main() {
    try {
        const data = await getData();
        displayCurrentWeather(data);
        displayDailyWeather(data);
        document.querySelector('#city').innerHTML = data.city
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

main()