import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import MessagesScreen from "../screens/MessagesScreen/MessagesScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const switchNavigator = createSwitchNavigator({
  Main: MainTabNavigator,
  Messages: { screen: MessagesScreen },
  Settings: { screen: SettingsScreen }
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
