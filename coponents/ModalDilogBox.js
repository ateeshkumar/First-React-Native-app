import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalDilogBox = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.centerView}>
          <View style={styles.modelView}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
              Hello i'm ateesh kumar
            </Text>
            <Button title="Close" onPress={() => setShow(!show)} />
          </View>
        </View>
      </Modal>
      <View style={styles.button1}>
        <Button title="Show Dailog Box" onPress={() => setShow(!show)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button1: {
    marginTop: 80,
    justifyContent: "flex-end",
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modelView: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10,
  },
});

export default ModalDilogBox;
