import { ErrorManager } from "./errorHandle";

async function doQuery(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TZM2HNLF3AZVPNVMLQ9XD92C5`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 400) {
        throw ErrorManager.locationError();
      }
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function findInfoByDate(json, date) {
  try {
    const { resolvedAddress } = json;
    const place = resolvedAddress.split(",");
    if (place[0] !== "London") {
      console.log("You meant:");
      console.log(resolvedAddress, "?");
    }
    const specificDate = json.days.find((day) => day.datetime === date);
    console.log(specificDate);
    if (!specificDate || specificDate.datetime === undefined) {
      throw ErrorManager.dateError();
    }
    console.log(resolvedAddress);
    console.log(`Weather forecast for day: ${specificDate.datetime}`);
    console.log(`Temperature ${specificDate.temp}`);
    console.log(`Max Temperature ${specificDate.tempmax}`);
    console.log(`Humidity ${specificDate.humidity}`);
    return specificDate;
  } catch (error) {
    if (error.name === "dateError") {
      console.log(error.message);
    }
  }
}

export { doQuery, findInfoByDate };
