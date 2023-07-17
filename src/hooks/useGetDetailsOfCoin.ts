import { useEffect, useState } from "react";
import { Coin, CoinDetail } from "../typings/coinGeckoResponses";
import { coinGeckoApiDetails } from "../api/coinGeckoApi";

export const useGetDetailsOfCoins = (coin: Coin) => {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [coinDetails, setCoinsList] = useState<CoinDetail>();

  const getCoinDetails = async () => {
    const responseListCoins = await coinGeckoApiDetails.get<CoinDetail>("");
    setCoinsList(responseListCoins?.data);
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
