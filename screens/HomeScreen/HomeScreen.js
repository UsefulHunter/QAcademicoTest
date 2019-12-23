import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  Button,
  Alert
} from "react-native";
import { styles } from "./HomeScreen.style";

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
  const [showMessages, setShowMessages] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.nextEvents}>
        <SafeAreaView style={styles.areaListView}>
          <Text style={styles.titlesText}>Próximos Eventos:</Text>
          <FlatList
            data={EVENTS}
            renderItem={({ item }) => (
              <Item title={item.title} date={item.date} />
            )}
            keyExtractor={item => item.date}
          />
        </SafeAreaView>
      </View>
      {showMessages ? (
        <View style={styles.messagesBox}>
          <React.Fragment>
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
                onPress={() => {
                  setShowMessages(!showMessages);
                }}
              />
            </View>
          </React.Fragment>
        </View>
      ) : (
        <View>
          <Text>Sem Mensagens para mostrar</Text>
          <Button
            color="#FF0000"
            title="E se tiver??"
            onPress={() => setShowMessages(!showMessages)}
          />
        </View>
      )}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
