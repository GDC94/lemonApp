import styled from "styled-components/native";
import { Container } from "../../components/commons/common";
import { colors } from "../../components/commons/colors";

export const WelcomeContainer = styled(Container)`
  background-color: ${colors?.background};
  width: 100%;
  height: 100%;
`;

export const TopSection = styled.View`
  flex: 1.2;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const BottomSection = styled.View`
  width: 100%;
  padding: 24px;
  flex: 1;
  justify-content: flex-end;
`;

export const TopImage = styled.Image`
  width: 70%;
`;
