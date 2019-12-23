import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#ffffff"
  }
});
