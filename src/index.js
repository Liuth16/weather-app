import "./styles.css";
import { doQuery, findInfoByDate } from "./data";

doQuery("Paris").then((data) => findInfoByDate(data, "2024-11-04"));
