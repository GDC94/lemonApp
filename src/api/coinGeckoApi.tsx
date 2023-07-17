import axios from "axios";

export const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

/* Para evitar error por rate limit, se usa la siguiente url provista por mocky*/
export const coinGeckoApiMOCK = axios.create({
  baseURL: "https://run.mocky.io/v3/3f868aca-efd8-439a-9946-889b0bfb25c2",
});

export const coinGeckoApiMOCKDetails = axios.create({
  baseURL: "https://run.mocky.io/v3/fdb849d6-9dbf-4619-9b80-ea9ae4815d53",
});






