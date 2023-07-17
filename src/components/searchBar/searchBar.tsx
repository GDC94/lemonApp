import { FunctionComponent } from "react";
import Icon from "../../assets/lupa.png";
import TextCustom from "../commons/text/TextCustom";
import {
  SearchBarContent,
  SearchContainer,
  SearchIcon,
} from "./searchBar.styles";

const SearchBar: FunctionComponent = ({}) => {
  return (
    <>
      <TextCustom
        textStyles={{
          color: "#fff",
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 16,
        }}
      >
        Mercado crypto
      </TextCustom>
      <SearchContainer>
        <SearchBarContent></SearchBarContent>
        <SearchIcon source={Icon} />
      </SearchContainer>
    </>
  );
};

export default SearchBar;
