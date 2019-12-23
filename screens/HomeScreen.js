import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Button,
  Alert
} from "react-native";

const EVENTS = [
  {
    title: "PF Cálculo 2",
    date: "16/12"
  },
  {
    title: "Fim do Período Letivo",
    date: "20/12"
  },
  {
    title: "Natal",
    date: "25/12"
  },
  {
    title: "PF Cálculo 3",
    date: "17/12"
  },
  {
    title: "Inicio do Período Letivo",
    date: "08/02"
  },
  {
    title: "Carnaval",
    date: "12/03"
  },
  {
    title: "Páscoa",
    date: "05/04"
  }
];

const msgsNumbr = 28;
const lastSender = "Secretaria";
const subject = "Sem expediente na quarta feira";

function Item({ title, date }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
        {date} -> {title}
      </Text>
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

export default function HomeScreen() {
  //const { navigate } = this.navigation;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.nextEvents}>
          <Text style={styles.titlesText}>Próximos Eventos:</Text>
          <SafeAreaView style={styles.areaListView}>
            <FlatList
              data={EVENTS}
              renderItem={({ item }) => (
                <Item title={item.title} date={item.date} />
              )}
              keyExtractor={item => item.date}
            />
          </SafeAreaView>
        </View>
        <View style={styles.messagesBox}>
          <Text style={styles.titlesText}>
            Você possui *{msgsNumbr}* mensagens não lidas!
          </Text>
          <Text>Último Remetente: {lastSender}</Text>
          <Text>Assunto: {subject}</Text>
          <View style={styles.buttonArea}>
            <Button
              title="Abrir Mensagens"
              onPress={() => Alert.alert("Mensagens Abertas")}
            />
            <Separator />
            <Button
              color="#FF0000"
              title="Ignorar"
              onPress={() => Alert.alert("Ignorar")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  nextEvents: {
    flex: 1,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#006D9E",
    borderRadius: 4
  },
  titlesText: {
    fontSize: 17,
    color: "#000000",
    fontWeight: "bold"
  },
  item: {
    padding: 10,
    marginVertical: 0,
    marginHorizontal: 10
  },
  title: {
    fontSize: 18
  },
  areaListView: {
    height: 150
  },
  messagesBox: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#FF0000",
    borderRadius: 4
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
