export function displayHourlyWeather(data) {
    const hourlyDataContainer = document.querySelector("#hourly-data");
  
    data.weatherData.hourlyData.forEach((hour) => {
      // 创建每个小时的容器
      const hourlyDataCard = document.createElement("div");
      hourlyDataCard.classList.add("hourly-data-card");

      //precipitation probability
      let pop;
      if(hour.pop <=0.1){
        pop = "0p";
      }else if(hour.pop > 0.1 && hour.pop <= 0.3){
        pop = "20p";
      }else if(hour.pop > 0.3 && hour.pop <= 0.5){
        pop = "40p"
      }else if(hour.pop > 0.5 && hour.pop <= 0.7){
        pop = "60p"
      }else if(hour.pop > 0.7 && hour.pop <= 0.9){
        pop = "80p"
      }else if(hour.pop > 0.9 && hour.pop <= 1){
        pop = "100p"
      }else{
        console.log("error for precipitation probability");
      }
  
      // 将内容添加到 hourlyDataCard
      hourlyDataCard.innerHTML = `
        <span>${hour.hour}:00</span>
        <img src="/icon/${hour.icon}.png" alt="Weather icon for hour" />
        <h3>${hour.temp}&deg</h3>
        <span>${(hour.pop * 100).toFixed(0)}% <img src="../icon/${pop}.png" alt="pop"></span>
      `;
      let test;
      test = document.querySelector(".hourly-data-card span img")
      console.log(test);
      // 将hourlyDataCard 追加到 hourly-data 容器中
      hourlyDataContainer.appendChild(hourlyDataCard);
    });
  }