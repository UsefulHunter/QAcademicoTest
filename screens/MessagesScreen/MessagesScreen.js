import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./MessagesScreen.style";

class MessagesScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>There will be some messages in Here.</Text>
        </View>
      </ScrollView>
    );
  }
}

MessagesScreen.navigationOptions = {
  title: "Mensagens"
};

export default MessagesScreen;
