import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen By VV</Text>
      <Button
        onPress={() => console.log(" Button Pressed  ")}
        title="Go to Component demo"
      />
      <TouchableOpacity onPress={() => console.log("List button pressed ")}>
        <Text>Go to List</Text>
        <Text>Go to List</Text>
        <Text>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
