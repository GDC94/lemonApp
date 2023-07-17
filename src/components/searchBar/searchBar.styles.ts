import styled from "styled-components/native";
import { colors } from "../commons/colors";

export const SearchContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const SearchBarContent = styled.TextInput`
  background-color: ${colors.gray};
  height: 48px;
  border-radius: 16px;
  width: 86%;
  padding-left: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  
`;

export const SearchIcon = styled.Image`
  height: 35px;
  width: 35px;
`;
