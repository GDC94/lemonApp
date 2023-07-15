import { View } from "react-native";
import { styles } from "./homeScreenStyles";
import CardsCoinsList from "../../components/cardsCoin/cardsCoin";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CardsCoinsList />
    </View>
  );
};

export default HomeScreen;
