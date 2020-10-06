import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const myname = "Vivek";
  return (
    <View>
      <Text style={styles.textStyle}> Getting started with React Native </Text>
      <Text style={styles.subheaderstyle}>
        Hii there ... It's me {myname}..
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subheaderstyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
