import { FunctionComponent } from "react";
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
            }}
          >
            ¡Empecemos!
          </ButtonCustom>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default WelcomeScreen;
