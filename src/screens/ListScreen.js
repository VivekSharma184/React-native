import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const Friends = [
    { name: "Friends #1" , key: '1'},
    { name: "Friends #2" , key: '2'},
    { name: "Friends #3" , key: '3'},
    { name: "Friends #4" , key: '4'},
    { name: "Friends #5" , key: '5'},
    { name: "Friends #6" , key: '6'},
    { name: "Friends #7" , key: '7'},
    { name: "Friends #8" , key: '8'},
    { name: "Friends #9" , key: '9'},
  ];

  return (
    <FlatList
      data={Friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
