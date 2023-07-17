import styled from "styled-components/native";
import { Container } from "../../components/commons/common";
import { colors } from "../../components/commons/colors";

export const LemonCardContainer = styled(Container)``;

export const LemmyContent = styled.View`
  flex: 1.4;
  background-color: ${colors.backgroundHome};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Lemmy = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const PersonalContent = styled.View`
  flex: 2;
  width: 100%;
  padding: 25px;
`;

export const PropertiesCard = styled.View`
  margin-top: 20px;
  padding-top: 12px;
  padding-bottom: 10px;
  padding-left: 20px;
  height: 80px;
  width: 100%;
  border: 4px;
  border-color: ${colors.grayLight};
  border-radius: 16px;
`;
