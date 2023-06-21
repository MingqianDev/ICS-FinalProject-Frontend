import { getLocation } from "./getLocation.js";
import { setGlobal } from "./globals.js";

//Fetch weather data from the server.
export async function getData() {
    try {
        const location = await getLocation();

        const response = await fetch('https://www.weatherPro.top:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(location)
        });
        const data = await response.json();
        setGlobal('weatherData', data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
