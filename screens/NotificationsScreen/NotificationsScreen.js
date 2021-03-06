import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./NotificationsScreen.style";

const NotificationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Some notifications here, soon</Text>
      </View>
    </ScrollView>
  );
};

NotificationScreen.navigationOptions = {
  title: "Notificações"
};

export default NotificationScreen;
