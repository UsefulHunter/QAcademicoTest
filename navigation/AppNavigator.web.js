import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import MessagesScreen from "../screens/MessagesScreen/MessagesScreen";

const switchNavigator = createSwitchNavigator({
  Main: MainTabNavigator,
  Messages: { screen: MessagesScreen }
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
