console.log("Client side weather.js JavaScript file is loaded");

const weatherForm = document.querySelector("form");
const weatherImage = document.querySelector("#weatherImage");
const description = document.querySelector("#description");
const locationInput = document.querySelector("#locationInput");
const temperature = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feelsLike");
const precip = document.querySelector("#precip");
const wind = document.querySelector("#wind");
const lastUpdate = document.querySelector("#lastUpdate");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = locationInput.value;
  description.textContent = "Loading...";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      console.log(data);
      if (data.error) {
        description.textContent =
          "Opps. It looks like there has been an error.";
        lastUpdate.textContent = data.error;
      } else {
        locationInput.value = data.location;
        weatherImage.src = data.forecast.weatherIcon;
        description.textContent = data.forecast.description;
        temperature.textContent = `${data.forecast.temperature} °C`;
        const fahrenheitConvert = (data.forecast.temperature*9/5)+32
        feelsLike.textContent = `Fahrenheit: ${fahrenheitConvert} °F`;
        // chanceOfRain.textContent = `Chance of rain: ${data.forecast.chanceofrain}%`;
        // chanceOfRain.textContent = `Chance of rain: ${data.forecast.chanceOfRain}%`;
        localTime.textContent = `Local time: ${data.forecast.localTime}`;
        // currentTime.textContent = `Current time: ${data.forecast.currentTime}`;
        wind.textContent = `Wind Speed: ${data.forecast.wind} km/h`;
        lastUpdate.textContent = `Last Update: ${new Date().toLocaleTimeString()}`;
      }
    });
  });
});
