import { useEffect, useState } from "react";
import { CoinDetail } from "../typings/coinGeckoResponses";
import { coinGeckoApiDetails } from "../api/coinGeckoApi";

export const useGetDetailsOfCoins = (id?: string) => {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [coinDetails, setCoinsList] = useState<CoinDetail>();

  
  const getCoinDetails = async () => {
    const responseListCoins = await coinGeckoApiDetails.get<CoinDetail>('');
    setCoinsList(responseListCoins?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCoinDetails();
  }, []);

  return {
    coinDetails,
    isLoading: loading,
  };
};
