import { useEffect, useState } from "react";
import { Coin, CoinDetail } from "../typings/coinGeckoResponses";
import { coinGeckoApiMOCKDetails } from "../api/coinGeckoApi";

export const useGetDetailsOfCoins = (coin: Coin) => {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [coinDetails, setCoinDetails] = useState<CoinDetail>();

  const getCoinDetails = async () => {
    /* const responseListCoins = await coinGeckoApi.get<CoinDetail>(`coins/${coin.id}}`); */
    const responseListCoins = await coinGeckoApiMOCKDetails.get<CoinDetail>("");
    setCoinDetails(responseListCoins?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCoinDetails();
  }, [coin]);

  return {
    coinDetails,
    isLoading: loading,
  };
};
