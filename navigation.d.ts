import { RootStackParamsList } from "./src/navigators/rootNavigator";


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList { }
  }
}