import React, { Component } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./LoginScreen.style";
import LoginForm from "./LoginForm";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../assets/images/logo_transparent.png")}
          />
        </View>

        <View style={styles.formContainer}>
          <LoginForm navigate={this.props.navigation.navigate} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
