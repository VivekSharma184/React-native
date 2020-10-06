import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
  },
  {
    initialRouteName: "Components", //Decides which component to show first
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
