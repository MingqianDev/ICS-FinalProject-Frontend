export function displayHourlyWeather(data) {
    const hourlyDataContainer = document.querySelector("#hourly-data");
  
    data.weatherData.hourlyData.forEach((hour) => {
      // 创建每个小时的容器
      const hourlyDataCard = document.createElement("div");
      hourlyDataCard.classList.add("hourly-data-card");
  
      // 将内容添加到 hourlyDataCard
      hourlyDataCard.innerHTML = `
        <span>${hour.hour}:00</span>
        <img src="/icon/${hour.icon}.png" alt="Weather icon for hour" />
        <span>${hour.temp}°</span>
        <span>${(hour.pop * 100).toFixed(0)}% precipitation</span>
      `;
  
      // 将hourlyDataCard 追加到 hourly-data 容器中
      hourlyDataContainer.appendChild(hourlyDataCard);
    });
  }