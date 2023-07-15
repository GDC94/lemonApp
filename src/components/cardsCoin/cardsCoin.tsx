import { ActivityIndicator, FlatList, View } from "react-native";
import { styles } from "./cardsCoinStyles";
import { useGetListOfCoins } from "../../hooks/useGetListOfCoins";
import { CoinItemCard } from "../coinItemCard";

const CardsCoinsList = () => {
  const { listOfCoins } = useGetListOfCoins();

  const renderLoader = () => {
    return (
      <View style={styles.Loader}>
        <ActivityIndicator size={"large"} color={"#000000"} />
      </View>
    );
  };


  return (
    <View style={styles.containerCoins}>
      <FlatList
        data={listOfCoins}
        keyExtractor={(coin) => coin.id}
        renderItem={({ item }) => {
          return <CoinItemCard coin={item} />;
        }}
        ListFooterComponent={renderLoader}

      />
    </View>
  );
};

export default CardsCoinsList;
