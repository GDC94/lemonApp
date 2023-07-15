import { StatusBar } from "expo-status-bar";
import image from "../../assets/lemoncapture.png";
import ButtonCustom from "../../components/commons/buttonCustom/buttonCustom";

import {
  BottomSection,
  TopImage,
  TopSection,
  WelcomeContainer,
} from "./welcomeScreen.styles";

const WelcomeScreen = () => {
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
