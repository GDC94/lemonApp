import { FunctionComponent } from "react";
import { SearchBar } from "../searchBar";
import { Coin } from "../../typings/coinGeckoResponses";
import { FlatList } from "react-native";
import { CoinItem } from "../coinItem";
import { CoinsListScroll, ListCoinsSection } from "./listCoins.styles";

interface ListCoinsProps {
  arrOfCoins: Coin[];
}

const ListCoins: FunctionComponent<ListCoinsProps> = ({ arrOfCoins }) => {
  return (
    <ListCoinsSection>
      <SearchBar />
      <CoinsListScroll>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={arrOfCoins}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <CoinItem coin={item} />}
        />
      </CoinsListScroll>
    </ListCoinsSection>
  );
};

export default ListCoins;
