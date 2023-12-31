import { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/welcomeScreen";
import { HomeScreen } from "../screens/homeScreen";
import { colors } from "../components/commons/colors";
import { Greeting, Profile } from "../components/header";
import lemmy from "../assets/lemmy.png";
import { Coin } from "../typings/coinGeckoResponses";
import { CoinDetailsScreen } from "../screens/coinDetails";
import { LemonCardScreen } from "../screens/lemonCardScreen";

export type RootStackParamsList = {
  WelcomeScreen: JSX.Element;
  HomeScreen: undefined;
  CoinDetailsScreen: { coin: Coin };
  LemonCardScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootStackNavigator: FunctionComponent = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.backgroundHome,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 140,
          },
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 25,
          },
          headerRight: () => (
            <Profile imageSource={lemmy} imgStyle={undefined} />
          ),
        }}
        initialRouteName="WelcomeScreen"
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: () => <></>,
            headerLeft: () => (
              <Greeting mainText={"Hola German"} subText={"$gderbes 🍋"} />
            ),
          }}
        />

        <Stack.Screen
          name="CoinDetailsScreen"
          component={CoinDetailsScreen}
          options={{ headerTitle: () => <></> }}
        />

        <Stack.Screen
          name="LemonCardScreen"
          component={LemonCardScreen}
          options={{ headerTitle: () => <></> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
