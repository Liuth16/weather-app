import "./styles.css";
import { doQuery, findInfoByDate } from "./data";

doQuery("London").then((data) => findInfoByDate(data, "2024-11-06"));
