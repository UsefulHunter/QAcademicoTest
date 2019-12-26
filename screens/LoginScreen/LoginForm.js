import React, { Component } from "react";

import { Text, TextInput, TouchableOpacity, Alert, View } from "react-native";
import { styles } from "./LoginForm.style";

class LoginForm extends Component {
  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="next"
          placeholder="Nº Matricula"
          placeholderTextColor="#FFFFFF"
        />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Senha"
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            Alert.alert("TOUCH DA BUTTON");
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginForm;
