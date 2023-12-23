import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import Textinput from "./coponents/Textinput";
import Formdata from "./coponents/Formdata";
import Dataarray from "./coponents/Dataarray";
import Responsive from "./coponents/Responsive";
import Radiobutton from "./coponents/Radiobutton";
import Progressbar from "./coponents/Progressbar";
import ModalDilogBox from "./coponents/ModalDilogBox";
import PessableButton from "./coponents/PessableButton";
import { WebView } from "react-native-webview";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"#fff"}
        barStyle={"dark-content"}
        hidden={false}
      />
      {/* <WebView
        source={{ uri: "https://alphapartical.com/" }}
        style={{ flex: 1 }}
      /> */}
      <ScrollView>
        <Text style={{ fontSize: 40 }}>{count}</Text>
        <StatusBar style="auto" />
        <Text>Maurya</Text>
        <Button title="Hello click me" onPress={() => setCount(count + 1)} />
        <Textinput />
        <Formdata />
        <View>
          {Dataarray.map((item, index) => (
            <ScrollView key={item.id}>
              <Text
                style={{
                  fontSize: 25,
                  backgroundColor: "green",
                  margin: 2,
                  padding: 10,
                }}
              >
                {item.login}
              </Text>
            </ScrollView>
          ))}
        </View>
        <Responsive />
        <Radiobutton />
        <Progressbar />
        <PessableButton />
        <ModalDilogBox />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollvi: {},
});
