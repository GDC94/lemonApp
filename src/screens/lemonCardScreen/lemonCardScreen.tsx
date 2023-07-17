import { FunctionComponent } from "react";
import {
  Lemmy,
  LemmyContent,
  LemonCardContainer,
  PersonalContent,
  PropertiesCard,
} from "./lemonCardScreen.styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamsList } from "../../navigators/rootNavigator";
import { LemmyImage } from "../../assets";
import TextCustom from "../../components/commons/text/TextCustom";
import { colors } from "../../components/commons/colors";

export interface LemonCardScreen
  extends StackScreenProps<RootStackParamsList, "LemonCardScreen"> {}

type Property = {
  id: number;
  title: string;
  value: string;
};

const arrOfProperties: Property[] = [
  {
    id: 1,
    title: "Accesories",
    value: "Gems Yin Ore",
  },
  {
    id: 2,
    title: "Background",
    value: "Yellow & Green Marriage",
  },
  {
    id: 3,
    title: "Clotheswear",
    value: "Open Jacket Blue Batik",
  },
];

const LemonCardScreen: FunctionComponent<LemonCardScreen> = () => {
  return (
    <LemonCardContainer>
      <LemmyContent>
        <Lemmy source={LemmyImage} />
        <TextCustom
          textStyles={{
            color: colors.white,
            fontSize: 19,
            fontWeight: "700",
            marginTop: 15,
          }}
        >
          $gderbes
        </TextCustom>
      </LemmyContent>
      <PersonalContent>
        <TextCustom
          textStyles={{ color: colors.white, fontSize: 32, fontWeight: "700" }}
        >
          Lemmy #1349756
        </TextCustom>

        <TextCustom
          textStyles={{
            color: colors.white,
            fontSize: 24,
            fontWeight: "700",
            marginTop: 20,
          }}
        >
          Propiedades
        </TextCustom>
        {arrOfProperties?.map(({ title, value, id }) => (
          <PropertiesCard key={id}>
            <TextCustom
              textStyles={{
                color: colors.textProp,
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              {title}
            </TextCustom>
            <TextCustom
              textStyles={{
                color: colors.white,
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              {value}
            </TextCustom>
          </PropertiesCard>
        ))}
      </PersonalContent>
    </LemonCardContainer>
  );
};

export default LemonCardScreen;
