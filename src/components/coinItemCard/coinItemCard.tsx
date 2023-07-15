import { Text, View, Image } from "react-native";
import { styles } from "./coinItemCardStyles";
import { Coin } from "../../typings/coinGeckoResponses";

interface CoinItemCardProps {
  coin: Coin;
}

const CoinItemCard = ({ coin }: CoinItemCardProps) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image
          source={require("../../assets/lemon-lemon.png")}
          style={styles.image}
        />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
    </View>
  );
};

export default CoinItemCard;
