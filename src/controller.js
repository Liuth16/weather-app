import { doQuery, findInfoByDate } from "./data";
import { suggestLocation } from "./utils";

function getInfo() {
  document
    .getElementById("location-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const location = document.getElementById("location").value;
      const date = document.getElementById("date").value;
      console.log(date);
      try {
        const data = await doQuery("London");
        const info = await findInfoByDate(data, date);
        return suggestLocation(location, info);
      } catch (error) {
        console.error(error.message);
      }
    });
}

export { getInfo };
