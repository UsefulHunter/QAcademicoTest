import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationScreen from "../screens/NotificationsScreen/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home` : "md-information-circle"}
    />
  )
};

HomeStack.path = "";

const MessagesStack = createStackNavigator(
  {
    Message: MessagesScreen
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: "Mensagens",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-mail${focused ? "-open" : ""}`
          : "md-information-circle"
      }
    />
  )
};

MessagesStack.path = "";

const NotificationStack = createStackNavigator(
  {
    Links: NotificationScreen
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: "Notificações",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-notifications${focused ? "-outline" : ""}`
          : "md-notifications"
      }
    />
  )
};

NotificationStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cog" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MessagesStack,
  NotificationStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
