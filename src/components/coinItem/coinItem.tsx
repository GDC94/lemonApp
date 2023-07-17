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

interface CoinItemProps {
  coin: Coin;
}

const CoinItem: FunctionComponent<CoinItemProps> = ({ coin }) => {
  return (
    <CoinItemView>
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
            textStyles={{ color: "#ffffff", fontSize: 20, fontWeight: "600" }}
          >
            {coin?.name}
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
            textStyles={{ color: "#ffffff", fontSize: 20, fontWeight: "600" }}
          >
            {coin?.symbol}
          </TextCustom>
        </CoinInfoContent>
      </NameSymbolContent>
    </CoinItemView>
  );
};

export default CoinItem;
