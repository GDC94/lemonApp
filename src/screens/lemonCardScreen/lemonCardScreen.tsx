import { FunctionComponent } from "react";
import { LemonCardContainer } from "./lemonCardScreen.styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigators/rootNavigator";

export interface LemonCardScreen
  extends StackScreenProps<RootStackParamsList, "LemonCardScreen"> {}

const LemonCardScreen: FunctionComponent<LemonCardScreen> = () => {
  return <LemonCardContainer></LemonCardContainer>;
};

export default LemonCardScreen;
