const apiKey = 'dee7f9f89cf71e69d03cfc2d23e6dc69';

export function getCity(latitude, longitude) {
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = data[0].name;
            document.querySelector('#location').textContent = city;
            console.log(city);
        })
        .catch(error => {
            console.log('Error fetching city data:', error);
        });
}
