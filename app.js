fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=ODESA&units=metric&APPID=5d066958a60d315387d9492393935c19&lang=ru"
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);

    let feelsLike = document.createElement("div");
    feelsLike.innerHTML =
      "Ощущается как: " + Math.round(result.main.feels_like) + " &deg;C";
    feelsLike.classList.add("feels-like");

    let humidity = document.createElement("div");
    humidity.innerHTML = "Влажность: " + result.main.humidity + "%";
    humidity.classList.add("indexes");

    let wind = document.createElement("div");
    wind.innerHTML = "Скорость ветра: " + result.wind.speed + "км/год ";
    wind.classList.add("indexes");

    let arrow = document.createElement("span");
    arrow.innerHTML = "&#8593;";
    arrow.style.transform = "rotate(" + result.wind.deg + "deg)";
    arrow.style.display = "inline-block";
    wind.classList.add("indexes");

    wind.appendChild(arrow);

    let pressure = document.createElement("div");
    pressure.innerHTML = "Давление: " + result.main.pressure + "гПа";
    pressure.classList.add("indexes");

    let temp = document.createElement("div");
    temp.innerHTML = Math.round(result.main.temp) + "&deg;C";
    temp.classList.add("temp");

    let city = document.createElement("div");
    city.innerHTML = "Город:  Одесса";
    city.classList.add("city");

    let description = document.createElement("div");
    description.innerHTML = result.weather[0].description;
    description.classList.add("description");

    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    imageDiv.appendChild(image);

    let time = document.createElement("div");
    time.innerHTML = new Date(result.dt * 1000).toLocaleTimeString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    time.classList.add("time");

    weatherBlock.appendChild(time);
    weatherBlock.appendChild(imageDiv);
    weatherBlock.appendChild(city);
    weatherBlock.appendChild(description);
    weatherBlock.appendChild(humidity);
    weatherBlock.appendChild(temp);
    weatherBlock.appendChild(wind);
    weatherBlock.appendChild(feelsLike);
    weatherBlock.appendChild(pressure);
    
  });
    

const weatherBlock = document.querySelector(".weather");

let div = document.createElement("div");
