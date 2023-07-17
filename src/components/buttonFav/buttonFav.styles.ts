import styled from "styled-components/native";
import { colors } from "../commons/colors";

interface StyledFavoriteButtonProps {
  isFavorite?: boolean;
}

export const StyledFavoriteButton = styled.TouchableOpacity<StyledFavoriteButtonProps>`
  width: 60px;
  height: 40px;
  border-radius: 15px;
  border-width: 3px;
  border-color: ${({ isFavorite }: any) =>
    isFavorite ? colors.primary : colors.textGray};
  background-color: ${({ isFavorite }: any) =>
    isFavorite ? colors.primary : colors.grayLight};
  color: ${({ isFavorite }: any) =>
    isFavorite ? colors.primary : colors.textGray};
  align-items: center;
  justify-content: center;
`;
