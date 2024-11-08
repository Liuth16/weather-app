import { ErrorManager } from "./errorHandle";

async function doQuery(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TZM2HNLF3AZVPNVMLQ9XD92C5`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 400) {
      throw ErrorManager.locationError();
    }
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json;
}
function findInfoByDate(json, date) {
  const { resolvedAddress, days } = json;
  const specificDate = days.find((day) => day.datetime === date);
  if (!specificDate || specificDate.datetime === undefined) {
    throw ErrorManager.dateError();
  }
  return {
    location: resolvedAddress,
    date: specificDate.datetime,
    temperature: specificDate.temp,
    maxTemperature: specificDate.tempmax,
    humidity: specificDate.humidity,
  };
}

export { doQuery, findInfoByDate };
