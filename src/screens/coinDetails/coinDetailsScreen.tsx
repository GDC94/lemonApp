import { FunctionComponent } from "react";
import { CoinDetailsScreenContainer } from "./coinDetailsScreen.styles";
import { RootStackParamsList } from "../../navigators/rootNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { useGetDetailsOfCoins } from "../../hooks/useGetDetailsOfCoin";

export interface CoinDetailsScreen
  extends StackScreenProps<RootStackParamsList, "CoinDetailsScreen"> {}

const CoinDetailsScreen: FunctionComponent<CoinDetailsScreen> = ({
  navigation,
  route,
}) => {
  const { coin } = route.params;
  const { id } = coin;
  console.log(id);

  const { coinDetails } = useGetDetailsOfCoins("aave");

  return <CoinDetailsScreenContainer></CoinDetailsScreenContainer>;
};

export default CoinDetailsScreen;
