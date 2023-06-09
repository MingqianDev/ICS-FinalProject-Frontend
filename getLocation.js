import { setGlobal } from './globals.js';

// Get user's location using Geolocation API
export function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setGlobal('latitude', latitude);
                    setGlobal('longitude', longitude);
                    console.log(latitude, longitude);
                    resolve({ latitude, longitude });
                },
                error => {
                    console.log('Error getting location:', error);
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
}
