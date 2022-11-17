import ENV from "../env";
const BASE_URL = ENV.BASE_URL;
import axios from "axios";
const HTTP = axios.create({
  baseURL: BASE_URL,
});

export default HTTP;
