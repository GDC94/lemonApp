import { FunctionComponent } from "react";
import { SearchBar } from "../searchBar";
import { Coin } from "../../typings/coinGeckoResponses";
import { FlatList } from "react-native";
import { CoinItem } from "../coinItem";
import { useGetListOfCoins } from "../../hooks/useGetListOfCoins";
import TextCustom from "../commons/text/TextCustom";
import { colors } from "../commons/colors";
import { Lemon } from "../../assets";
import {
  CoinsListScroll,
  LemonLoad,
  ListCoinsSection,
  LoadingContent,
} from "./listCoins.styles";

const ListCoins: FunctionComponent = () => {
  const { listOfCoins, isLoading } = useGetListOfCoins();

  if (isLoading) {
    return (
      <ListCoinsSection>
        <SearchBar />
        <LoadingContent>
          <LemonLoad source={Lemon} />
          <TextCustom
            textStyles={{
              color: colors.textProp,
              fontSize: 14,
              marginTop: 10,
              fontWeight: "700",
            }}
          >
            Cargando...
          </TextCustom>
        </LoadingContent>
      </ListCoinsSection>
    );
  }
  return (
    <ListCoinsSection>
      <SearchBar />
      <CoinsListScroll>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listOfCoins}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <CoinItem coin={item} />}
        />
      </CoinsListScroll>
    </ListCoinsSection>
  );
};

export default ListCoins;
