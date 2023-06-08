import { getLocation } from "./getLocation.js";

export async function getData() {
    try {
        const location = await getLocation();
        console.log(location);

        const response = await fetch('http://www.weatherPro.top:4000', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(location)
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
