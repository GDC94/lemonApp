import styled from "styled-components/native";
import { colors } from "./colors";
import { Dimensions } from "react-native";

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors?.background};
`;

