import styled from "styled-components/native";
import { colors } from "../../commons/colors";

export const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 65px;
  width: 65px;
  border-radius: 16px;
  border: 4px solid ${colors.gray};
`;
export const ProfileImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 16px;
 
`;
