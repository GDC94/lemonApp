import axios from "axios";

export const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const coinGeckoApiMOCK = axios.create({
  baseURL: "https://run.mocky.io/v3/3f868aca-efd8-439a-9946-889b0bfb25c2",
});




