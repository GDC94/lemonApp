import styled from "styled-components/native";
import { ScreenWidth } from "../commons/common";
import { colors } from "../commons/colors";

export const CardBackground = styled.ImageBackground`
  height: 200px;
  width: ${ScreenWidth * 0.77}px;
  background-color: ${colors.gray};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
  border: 4px solid ${colors.gray};
`;

export const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

export const CardView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
