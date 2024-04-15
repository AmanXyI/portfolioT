import axios from "axios";
const productionURL = "http://localhost:3000/";

export const customFetch = axios.create({
  baseURL: productionURL,
});
