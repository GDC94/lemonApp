import React, { FunctionComponent } from "react";
import { HomeContainer } from "./homeScreen.styles";
import { StatusBar } from "expo-status-bar";

const HomeScreen: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar style="light" />
    </HomeContainer>
  );
};

export default HomeScreen;
