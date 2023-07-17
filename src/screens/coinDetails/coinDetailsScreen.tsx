import { FunctionComponent } from "react";
import { RootStackParamsList } from "../../navigators/rootNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { useGetDetailsOfCoins } from "../../hooks/useGetDetailsOfCoin";
import TextCustom from "../../components/commons/text/TextCustom";
import { colors } from "../../components/commons/colors";
import { ArrowDown, ArrowTop, Dollar, SwapIcon } from "../../assets";
import { ButtonFav } from "../../components/buttonFav";
import { View } from "react-native";
import {
  ButtonCoinAction,
  ButtonContent,
  ButtonFavContent,
  CoinDetailsScreenContainer,
  IconButton,
  ImageContainer,
  InfoTokenContainer,
  LogoCoin,
} from "./coinDetailsScreen.styles";

export interface CoinDetailsScreen
  extends StackScreenProps<RootStackParamsList, "CoinDetailsScreen"> {}

interface IconButton {
  id: number;
  iconName: string;
  action: string;
}

const arrOfIconsForButtons: IconButton[] = [
  { iconName: ArrowTop, id: 1, action: "Depositar" },
  { iconName: ArrowDown, id: 2, action: "Enviar" },
  { iconName: Dollar, id: 3, action: "Compraventa" },
  { iconName: SwapIcon, id: 4, action: "Cambiar" },
];

const CoinDetailsScreen: FunctionComponent<CoinDetailsScreen> = ({ route }) => {
  const { coin } = route.params;

  const { coinDetails } = useGetDetailsOfCoins(coin);

  return (
    <CoinDetailsScreenContainer>
      <ButtonFavContent>
        <ButtonFav coin={coin} />
      </ButtonFavContent>
      <ImageContainer>
        <LogoCoin source={{ uri: coinDetails?.image?.large }} />
        <TextCustom
          textStyles={{ color: colors.white, fontSize: 24, fontWeight: "600" }}
        >
          {coinDetails?.name}
        </TextCustom>

        <TextCustom
          textStyles={{
            color: colors.grayLight,
            fontSize: 16,
            fontWeight: "700",
            marginTop: 12,
          }}
        >
          Cotización actual
        </TextCustom>

        <TextCustom
          textStyles={{ color: "#ffffff", fontSize: 32, fontWeight: "700" }}
        >
          ≈ USD {coinDetails?.market_data?.current_price?.usd}
        </TextCustom>
      </ImageContainer>
      <InfoTokenContainer>
        <ButtonContent>
          {arrOfIconsForButtons?.map(({ iconName, id, action }) => {
            return (
              <View style={{ alignItems: "center", gap: 4 }}>
                <ButtonCoinAction key={id}>
                  <IconButton source={iconName} />
                </ButtonCoinAction>

                <TextCustom
                  textStyles={{
                    color: colors.primary,
                    fontSize: 14,
                    fontWeight: "700",
                  }}
                >
                  {action}
                </TextCustom>
              </View>
            );
          })}
        </ButtonContent>
      </InfoTokenContainer>
    </CoinDetailsScreenContainer>
  );
};

export default CoinDetailsScreen;
