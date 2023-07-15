import { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../src/screens/welcomeScreen";
import { HomeScreen } from "../src/screens/homeScreen";
import { colors } from "../src/components/commons/colors";

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
            height: 120,
          },
          headerTintColor: colors.green,
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
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
