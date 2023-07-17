import { FunctionComponent } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import image from "../../assets/lemonCapture.png";
import ButtonCustom from "../../components/commons/buttonCustom/buttonCustom";
import {
  BottomSection,
  TopImage,
  TopSection,
  WelcomeContainer,
} from "./welcomeScreen.styles";

const WelcomeScreen: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={image} resizeMode="contain" />
        </TopSection>
        <BottomSection>
          <ButtonCustom
            textStyles={{
              color: "white",
              fontSize: 22,
              fontFamily: "Nunito_700Bold",
              textAlign: "center",
            }}
            btnStyles={{
              marginBottom: 50,
              borderRadius: 30,
            }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            ¡Empecemos!
          </ButtonCustom>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default WelcomeScreen;
