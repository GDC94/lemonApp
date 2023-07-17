import styled from "styled-components/native";
import { colors } from "../commons/colors";

export const CoinItemView = styled.TouchableOpacity`
  height: 90px;
  width: 100%;
  background-color: ${colors.gray};
  border-radius: 14px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const CoinLogoContent = styled.View`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${colors.grayLight};
  border-radius: 14px;
  margin: 10px;

  width: 15% ;
`;

export const CoinInfoContent = styled.View`
  display: flex;
  flex-direction: row;
  padding-right: 10px ;
 
`;

export const NameSymbolContent = styled.View`

`;

export const LogoCoin = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;
