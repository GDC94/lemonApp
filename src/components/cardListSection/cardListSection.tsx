import { FunctionComponent } from "react";
import CardItem, { CardItemProps } from "../coinItemCard/cardItem";
import { FlatListCustom } from "./cardListSection.styles";

interface CardListSectionProps {
  arrOfCards: Array<CardItemProps>;
}

const CardListSection: FunctionComponent<CardListSectionProps> = ({
  arrOfCards,
}) => {
  return (
    <FlatListCustom
      data={arrOfCards}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: "center",
      }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item} />}
    ></FlatListCustom>
  );
};

export default CardListSection;
