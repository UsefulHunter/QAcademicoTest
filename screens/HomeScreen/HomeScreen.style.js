import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
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
    flex: 1,
    alignItems: "center",
    height: "auto",
    marginTop: 25,
    marginBottom: 25
  },
  messagesBox: {
    flex: 1,
    marginTop: 25,
    height: "auto",
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
