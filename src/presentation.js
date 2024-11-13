import clearDay from "./icons/clear-day.svg";
import clearNight from "./icons/clear-night.svg";
import cloudy from "./icons/cloudy.svg";
import fog from "./icons/fog.svg";
import hail from "./icons/hail.svg";
import partlyCloudyDay from "./icons/partly-cloudy-day.svg";
import partlyCloudyNight from "./icons/partly-cloudy-night.svg";
import rainSnowShowersDay from "./icons/rain-snow-showers-day.svg";
import rainSnowShowersNight from "./icons/rain-snow-showers-night.svg";
import rainSnow from "./icons/rain-snow.svg";
import rain from "./icons/rain.svg";
import showersDay from "./icons/showers-day.svg";
import showersNight from "./icons/showers-night.svg";
import sleet from "./icons/sleet.svg";
import snowShowersDay from "./icons/snow-showers-day.svg";
import snowShowersNight from "./icons/snow-showers-night.svg";
import snow from "./icons/snow.svg";
import thunderRain from "./icons/thunder-rain.svg";
import thunderShowersDay from "./icons/thunder-showers-day.svg";
import thunderShowersNight from "./icons/thunder-showers-night.svg";
import thunder from "./icons/thunder.svg";
import wind from "./icons/wind.svg";

const iconMap = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  cloudy,
  fog,
  hail,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "rain-snow-showers-day": rainSnowShowersDay,
  "rain-snow-showers-night": rainSnowShowersNight,
  "rain-snow": rainSnow,
  rain,
  "showers-day": showersDay,
  "showers-night": showersNight,
  sleet,
  "snow-showers-day": snowShowersDay,
  "snow-showers-night": snowShowersNight,
  snow,
  "thunder-rain": thunderRain,
  "thunder-showers-day": thunderShowersDay,
  "thunder-showers-night": thunderShowersNight,
  thunder,
  wind,
};

function showError(message) {
  const existingError = document.querySelector(".error-overlay");
  if (existingError) {
    existingError.remove();
  }

  const errorOverlay = document.createElement("div");
  errorOverlay.className = "error-overlay";

  const errorContainer = document.createElement("div");
  errorContainer.className = "error-container";

  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.textContent = message;

  const closeButton = document.createElement("button");
  closeButton.className = "error-close";
  closeButton.textContent = "×";
  closeButton.onclick = () => errorOverlay.remove();

  errorContainer.appendChild(errorMessage);
  errorContainer.appendChild(closeButton);
  errorOverlay.appendChild(errorContainer);
  document.body.appendChild(errorOverlay);

  setTimeout(() => {
    errorOverlay.remove();
  }, 5000);
}

function updateUI(result) {
  const mainContent = document.querySelector(".main-content");

  let currentInfo = document.querySelector(".current-info");
  if (!currentInfo) {
    currentInfo = document.createElement("div");
    currentInfo.className = "current-info";
    mainContent.appendChild(currentInfo);
  }

  let dateHourInfo = document.querySelector(".date-hour-info");
  if (!dateHourInfo) {
    dateHourInfo = document.createElement("div");
    dateHourInfo.className = "date-hour-info";
    mainContent.appendChild(dateHourInfo);
  }

  let dateMessage = document.querySelector(".date-message");
  if (!dateMessage) {
    dateMessage = document.createElement("div");
    dateMessage.className = "date-message";
    mainContent.insertBefore(dateMessage, dateHourInfo);
  }

  const [year, month, day] = result.date.split("-");
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      // eslint-disable-next-line prettier/prettier
    }
  );

  dateMessage.textContent = `Weather for selected date: ${formattedDate}`;

  dateHourInfo.innerHTML = "";

  result.hours.forEach((hour) => {
    const hourDiv = document.createElement("div");
    hourDiv.className = "hour-info";
    const [h, minute] = hour.datetime.split(":");
    const formattedHour = `${h}:${minute}`;
    hourDiv.innerHTML = `
      <img src="${iconMap[hour.icon]}" alt="${hour.conditions}">
      <p class="hour-time">${formattedHour}</p>
      <p class="hour-temp">${hour.temp}°C</p>
      <p class="hour-conditions">${hour.conditions}</p>
    `;
    dateHourInfo.appendChild(hourDiv);
  });

  const [hour, minute] = result.currentCond.datetime.split(":");
  const formattedCurrentDate = `${hour}:${minute}`;

  currentInfo.innerHTML = `
      <h2>Weather now</h2>
      <img src="${iconMap[result.currentCond.icon]}" alt="${result.currentCond.conditions}">
      <p>${result.location}</p>
      <p>Last updated: ${formattedCurrentDate}</p>
      <p>Current condition: ${result.currentCond.conditions}</p>
      <p>Temperature: ${result.currentCond.temp}°C</p>
    `;
}

export { showError, updateUI };
