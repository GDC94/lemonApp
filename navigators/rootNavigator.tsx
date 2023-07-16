import { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../src/screens/welcomeScreen";
import { HomeScreen } from "../src/screens/homeScreen";
import { colors } from "../src/components/commons/colors";

import lemmy from "../src/assets/lemmy.png";
import { Greeting, Profile } from "../src/components/header";

type RootStackParamsList = {
  WelcomeScreen: JSX.Element;
  HomeScreen: JSX.Element;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootStackNavigator: FunctionComponent = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
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
        initialRouteName="HomeScreen"
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
              <Greeting mainText={"Hola German"}  subText={"$gderbes"} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
