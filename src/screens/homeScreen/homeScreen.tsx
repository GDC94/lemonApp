import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { CardListSection } from "../../components/cardListSection";
import { data } from "../../data";
import { ListCoins } from "../../components/ListCoins";
import { HomeContainer } from "./homeScreen.styles";
import { useGetListOfCoins } from "../../hooks/useGetListOfCoins";

const HomeScreen: FunctionComponent = () => {
  const { listOfCoins } = useGetListOfCoins();

  return (
    <HomeContainer>
      <StatusBar style="light" />
      <CardListSection arrOfCards={data} />
      <ListCoins arrOfCoins={listOfCoins} />
    </HomeContainer>
  );
};

export default HomeScreen;
