const apiKey = 'dee7f9f89cf71e69d03cfc2d23e6dc69';

export function getWeatherData(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const description = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(1); 

            document.querySelector('#location').textContent = location;
            document.querySelector('#description').textContent = description;
            document.querySelector('#temperature').textContent = temperature + '°C';
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}
