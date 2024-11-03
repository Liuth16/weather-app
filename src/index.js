import "./styles.css";

async function doQuery(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TZM2HNLF3AZVPNVMLQ9XD92C5`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function findInfoByDate(json, date) {
  const specificDate = json.days.find((day) => day.datetime === date);
  console.log(specificDate.datetime);
  console.log(specificDate.temp);
  console.log(specificDate.tempmax);
  console.log(specificDate.humidity);
  return specificDate;
}

function findInfoByHour

doQuery("London").then((data) => findInfoByDate(data, "2024-10-31"));
