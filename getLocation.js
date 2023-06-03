import {getWeatherData} from './getWeatherData.js'
import {getCity} from './getCity.js';

// Get user's location using Geolocation API
export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeatherData(latitude, longitude);
            getCity(latitude,longitude)
            console.log(latitude, longitude);
        }, error => {
            console.log('Error getting location:', error);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}
