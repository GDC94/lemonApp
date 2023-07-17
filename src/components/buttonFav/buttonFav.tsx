import React, { FunctionComponent, useEffect, useState } from "react";
import TextCustom from "../commons/text/TextCustom";
import { colors } from "../commons/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Coin } from "../../typings/coinGeckoResponses";
import { StyledFavoriteButton } from "./buttonFav.styles";

interface ButtonFavProps {
  coin: Coin;
}

const ButtonFav: FunctionComponent<ButtonFavProps> = ({ coin }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    checkIfFavorite();
  }, []);

  const checkIfFavorite = async () => {
    try {
      const favoriteCoins = await AsyncStorage.getItem("favoriteCoins");
      if (favoriteCoins) {
        const parsedFavorites = JSON.parse(favoriteCoins);
        setIsFavorite(parsedFavorites.includes(coin?.id));
      }
    } catch (error) {
      console.log("Error al obtener coins favoritas:", error);
    }
  };

  const handlePress = async () => {
    try {
      const favoriteCoins = await AsyncStorage.getItem("favoriteCoins");
      let parsedFavorites = [];
      if (favoriteCoins) {
        parsedFavorites = JSON.parse(favoriteCoins);
      }

      if (isFavorite) {
        const index = parsedFavorites.indexOf(coin?.id);
        if (index !== -1) {
          parsedFavorites.splice(index, 1);
        }
      } else {
        parsedFavorites.push(coin?.id);
      }

      await AsyncStorage.setItem(
        "favoriteCoins",
        JSON.stringify(parsedFavorites)
      );

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <StyledFavoriteButton onPress={handlePress} isFavorite={isFavorite}>
      <TextCustom
        textStyles={{
          fontSize: 16,
          color: isFavorite ? colors.white : colors.textGray,
          fontWeight: "700",
        }}
      >
        {" "}
        Fav{" "}
      </TextCustom>
    </StyledFavoriteButton>
  );
};

export default ButtonFav;
