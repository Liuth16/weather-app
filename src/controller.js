import { doQuery, findInfoByDate } from "./data";
import { suggestLocation } from "./utils";
import { showError, updateUI } from "./presentation";

function getInfo() {
  document
    .getElementById("location-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const location = document.getElementById("location").value;
      const date = document.getElementById("date").value;

      try {
        const data = await doQuery(location);
        const info = await findInfoByDate(data, date);
        const result = suggestLocation(location, info);
        console.log(result);
        if (!result.isExactMatch) {
          console.log(`Result for: ${result.suggestedLocation}`);
        }
        updateUI(result);
      } catch (error) {
        console.error(error.message);
        showError(error.message);
      }
    });
}

export { getInfo };
