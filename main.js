import { displayCurrentWeather } from './display/displayCurrentWeather.js';
import { displayDailyWeather } from './display/displayDailyWeather.js';
import { getData } from './getData.js';

<<<<<<< HEAD
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
=======
const data = getData();
displayCurrentWeather(data);
displayDailyWeather(data);
>>>>>>> 8e17ebca3367e6d02db47184d6e5033f5ecaeac0
