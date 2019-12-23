import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

export default function NotificationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Some notifications here, soon</Text>
      </View>
    </ScrollView>
  );
}

NotificationScreen.navigationOptions = {
  title: "Notificações"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#ffffff"
  }
});
