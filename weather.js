const API_KEY = "01fe2bff33cbe482a8a492952456871d";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temp = json.main.temp - 273.15;
      const place = json.name;
      const country = json.sys.country;
      for (key in json.weather) {
        main = json.weather[key].main;
        if (main === "Clouds") {
          main = "☁";
        } else if (main === "rain") {
          main = "☔";
        } else if (main === "wind") {
          main = "🍃";
        } else if (main === "snow") {
          main = "❄";
        }
      }
      const div = document.createElement("div");
      div.classList.add("div1");
      const div2 = document.createElement("div");
      div2.classList.add("div2");
      div.innerText = `${main} ${temp.toFixed() + "°"}`;
      div2.innerText = ` ${place} ${country} `;
      weather.appendChild(div);
      weather.appendChild(div2);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
