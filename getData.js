import { getLocation } from "./getLocation.js";

export async function getData() {
    try {
        const location = await getLocation();
        console.log(location);

        const response = await fetch('https://www.weatherPro.top:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(location)
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
