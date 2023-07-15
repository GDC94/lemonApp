import { WelcomeScreen } from "./src/screens/welcomeScreen";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
const App = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <WelcomeScreen />
    </>
  );
};

export default App;
