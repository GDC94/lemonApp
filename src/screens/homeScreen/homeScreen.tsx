import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { CardListSection } from "../../components/cardListSection";
import { data } from "../../data";
import { ListCoins } from "../../components/ListCoins";
import { HomeContainer } from "./homeScreen.styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigators/rootNavigator";


export interface HomeScreenProps
  extends StackScreenProps<RootStackParamsList, "HomeScreen"> {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {


  return (
    <HomeContainer>
      <StatusBar style="light" />
      <CardListSection arrOfCards={data} />
      <ListCoins/>

     
    </HomeContainer>
  );
};

export default HomeScreen;
