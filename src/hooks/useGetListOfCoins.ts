import { useEffect, useState } from "react";
import { Coin } from "../typings/coinGeckoResponses";
import { coinGeckoApiMOCK } from "../api/coinGeckoApi";

export const useGetListOfCoins = () => {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [coinsList, setCoinsList] = useState<Coin[]>([]);

  /* const LIST_OF_COINS = "/coins/list"; */
  const getCoins = async () => {
    /*  const responseListCoins = await coinGeckoApi.get<Coin[]>(LIST_OF_COINS); */
    const responseListCoins = await coinGeckoApiMOCK.get<Coin[]>("");
    setCoinsList(responseListCoins?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return {
    listOfCoins: coinsList,
    isLoading: loading,
  };
};
