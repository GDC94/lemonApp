import styled from "styled-components/native";
import { colors } from "../commons/colors";

export const ListCoinsSection = styled.View`
  flex: 2;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  background-color: ${colors.backgroundHome};
`;

export const CoinsListScroll = styled.View`
  margin-top: 18px;
  height: 400px;
`;

export const LoadingContent = styled.View`
  margin-top: 18px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LemonLoad = styled.Image`
  width: 30px;
  height: 30px;
`;
