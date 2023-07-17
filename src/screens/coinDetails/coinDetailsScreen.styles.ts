import styled from "styled-components/native";
import { Container } from "../../components/commons/common";
import { colors } from "../../components/commons/colors";

export const CoinDetailsScreenContainer = styled(Container)``;

export const ImageContainer = styled.View`
  flex: 2;
  background-color: ${colors.backgroundHome};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LogoCoin = styled.Image`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;

export const InfoTokenContainer = styled.View`
  flex: 1;
  background-color: ${colors.background};
  width: 100%;
  padding: 25px;
`;

export const ButtonContent = styled.View`
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonCoinAction = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.Image`
  height: 30px;
  width: 30px;
`;
