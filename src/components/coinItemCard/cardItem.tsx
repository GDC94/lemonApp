import { FunctionComponent } from "react";
import { ImageSourcePropType } from "react-native";
import { CardBackground, CardTouchable, CardView } from "./cardItem.styles";
import { colors } from "../commons/colors";
import TextCustom from "../commons/text/TextCustom";

export interface CardItemProps {
  id: number;
  title?: string;
  subitle?: string;
  imageBackgorund?: ImageSourcePropType;
}

const CardItem: FunctionComponent<CardItemProps> = ({
  id,
  title,
  subitle,
  imageBackgorund,
}) => {
  const handlePress = () => {};
  return (
    <CardBackground source={imageBackgorund}>
      <CardTouchable underlayColor={colors.green} onPress={handlePress}>
        <CardView>
          <TextCustom>{title}</TextCustom>
        </CardView>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
