import "./styles.css";
import { doQuery, findInfoByDate } from "./data";
import { suggestLocation } from "./utils";
import { getInfo } from "./controller";

// doQuery("London").then((data) => findInfoByDate(data, "2024-11-06"));

// try {
//   const data = await doQuery("London");
//   const info = await findInfoByDate(data, "2024-11-07");
//   console.log(suggestLocation("London", info));
// } catch (error) {
//   console.error(error.message);
// }
console.log(getInfo());
// getInfo();
