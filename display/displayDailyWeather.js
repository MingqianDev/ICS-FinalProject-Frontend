export function displayDailyWeather(data) {
    console.log(data);
    const forecastContainer = document.querySelector("#forecast-container");
    forecastContainer.innerHTML = ""; // 清空容器

    data.forEach((day) => {
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");

        const date = document.createElement("div");
        date.textContent = day.date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
        forecastItem.appendChild(date);

        const icon = document.createElement("img");
        icon.src = `http://openweathermap.org/img/wn/${day.icon}.png`;
        forecastItem.appendChild(icon);

        const temperature = document.createElement("div");
        temperature.textContent = `${day.temperature}°C`;
        forecastItem.appendChild(temperature);

        const description = document.createElement("div");
        description.textContent = day.description;
        forecastItem.appendChild(description);

        forecastContainer.appendChild(forecastItem);
    });
}
