import styled from "styled-components/native";
import { ScreenWidth } from "../commons/common";
import { colors } from "../commons/colors";

export const CardBackground = styled.ImageBackground`
  height: 200px;
  width: ${ScreenWidth * 0.84}px;
  background-color: ${colors.gray};
  border-radius: 16px;
  margin-right: 23px;
  overflow: hidden;
  border: 4px solid ${colors.gray};
  opacity: 0.93;
`;

export const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

export const CardView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  flex: 1;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const Logo = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;

export const LogoArg = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 30px;
  margin-right: 10px;
`;
export const WrapperLogo = styled.View`
  padding: 8px;
  background-color: ${colors.grayLight};
  border-radius: 16px;
`;

export const CardRowMiddle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;
export const CardRowButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;
