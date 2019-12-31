import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Login: LoginScreen, //Login is the LoginScreen
      Main: MainTabNavigator
    },
    {
      initialRouteName: "Login"
    }
  )
);
