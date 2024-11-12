function showError(message) {
  let mainContent = document.querySelector(".main-content");
  if (!mainContent) {
    mainContent = document.createElement("div");
    mainContent.className = "main-content";
    document.body.appendChild(mainContent);
  }

  let errorDiv = document.querySelector(".error-message");
  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    mainContent.appendChild(errorDiv);
  }
  errorDiv.textContent = message;
}

function updateUI(result) {
  const mainContent = document.querySelector(".main-content");

  let currentInfo = document.querySelector(".current-info");
  if (!currentInfo) {
    currentInfo = document.createElement("div");
    currentInfo.className = "current-info";
    mainContent.appendChild(currentInfo); // Changed from document.querySelector('main-content')
  }

  currentInfo.innerHTML = `
      <h2>NOW</h2>
      <p>${result.location}</p>
      <p>Hour: ${result.currentCond.datetime}</p>
      <p>Current condition: ${result.currentCond.conditions}</p>
      <p>Temperature: ${result.currentCond.temp}°C</p>
    `;

  let dateHourInfo = document.querySelector(".date-hour-info");
  if (!dateHourInfo) {
    dateHourInfo = document.createElement("div");
    dateHourInfo.className = "date-hour-info";
    mainContent.appendChild(dateHourInfo);
  }

  dateHourInfo.innerHTML = "";

  result.hours.forEach((hour) => {
    const hourDiv = document.createElement("div");
    hourDiv.className = "hour-info";
    hourDiv.innerHTML = `
      <p>Time: ${hour.datetime}</p>
      <p>Temperature: ${hour.temp}°C</p>
      <p>Conditions: ${hour.conditions}</p>
      <img src="./icons/${hour.icon}.svg" alt="${hour.conditions}">
    `;
    dateHourInfo.appendChild(hourDiv);
  });
}

export { showError, updateUI };
