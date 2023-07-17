import React, { FunctionComponent } from "react";
import { Coin } from "../../typings/coinGeckoResponses";
import { Coin as CoinIcon } from "../../assets";
import TextCustom from "../commons/text/TextCustom";
import {
  CoinInfoContent,
  CoinItemView,
  CoinLogoContent,
  LogoCoin,
  NameSymbolContent,
} from "./coinItem.styles";
import { useNavigation } from "@react-navigation/native";

interface CoinItemProps {
  coin: Coin;
}

const CoinItem: FunctionComponent<CoinItemProps> = ({ coin }) => {
  const navigation = useNavigation();

  return (
    <CoinItemView
      onPress={() => navigation.navigate("CoinDetailsScreen", { coin: coin })}
    >
      <CoinLogoContent>
        <LogoCoin source={CoinIcon} />
      </CoinLogoContent>

      <NameSymbolContent>
        <CoinInfoContent>
          <TextCustom
            textStyles={{
              color: "#a7a7a7",
              fontSize: 20,
              fontWeight: "600",
              marginRight: 6,
              marginBottom: 3,
            }}
          >
            Nombre:
          </TextCustom>

          <TextCustom
            textStyles={{
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "600",
              marginRight: 6,
            }}
          >
            {`${coin?.name?.slice(0, 18)}${
              coin?.name?.length > 18 ? "..." : ""
            }`}
          </TextCustom>
        </CoinInfoContent>
        <CoinInfoContent>
          <TextCustom
            textStyles={{
              color: "#a7a7a7",
              fontSize: 20,
              fontWeight: "600",
              marginRight: 6,
            }}
          >
            Simbolo:
          </TextCustom>

          <TextCustom
            textStyles={{
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "600",
              marginRight: 6,
            }}
          >
            {`${coin?.symbol?.slice(0, 18)}${
              coin?.symbol?.length > 18 ? "..." : ""
            }`}
          </TextCustom>
        </CoinInfoContent>
      </NameSymbolContent>
    </CoinItemView>
  );
};

export default CoinItem;
