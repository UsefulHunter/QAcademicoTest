import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./MessagesScreen.style";

export default function MessagesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>There will be some messages in Here.</Text>
      </View>
    </ScrollView>
  );
}

MessagesScreen.navigationOptions = {
  title: "Mensagens"
};
