import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const PessableButton = () => {
  return (
    <View>
      <Pressable
        onPress={() => console.warn("Just press")}
        onLongPress={() => console.warn("Long Press")}
        onPressIn={() => console.warn("Press In")}
        onPressOut={() => console.warn("Press out")}
      >
        <Text style={styles.pressable}>Pressable</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#333",
    color: "#fff",
    fontSize: 20,
    margin: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
  },
});

export default PessableButton;
