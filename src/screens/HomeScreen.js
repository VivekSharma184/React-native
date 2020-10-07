import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  //console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>HomeScreen By VV</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Component demo"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
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
