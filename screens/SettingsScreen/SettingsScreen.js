import React, { Component, useState } from "react";
import { Text, View, Button, Alert } from "react-native";

import { styles } from "./SettingsScreen.style";

const SettingsScreen = () => {
  const [showTextState, changeShowTextState] = useState(true);
  return (
    <View style={styles.container}>
      {showTextState && <Text>Something on the settings!!</Text>}
      <Button
        style={styles.button}
        color="#FF0000"
        title="Sair da Conta"
        onPress={() => changeShowTextState(!showTextState)}
      />
    </View>
  );
};

SettingsScreen.navigationOptions = {
  title: "Opções",
  headerRight: () => (
    <Button onPress={() => Alert.alert("Info")} title="Info" color="#fff" />
  ),
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

export default SettingsScreen;
