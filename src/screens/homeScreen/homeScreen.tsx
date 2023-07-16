import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { CardListSection } from "../../components/cardListSection";
import { data } from "../../data";
import { ListCoins } from "../../components/ListCoins";
import { HomeContainer } from "./homeScreen.styles";

const HomeScreen: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar style="light" />
      <CardListSection arrOfCards={data} />
      <ListCoins />
    </HomeContainer>
  );
};

export default HomeScreen;
