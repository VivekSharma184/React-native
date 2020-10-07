import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friends #1", Age: "20" },
    { name: "Friends #2", Age: "69" },
    { name: "Friends #3", Age: "66" },
    { name: "Friends #4", Age: "43" },
    { name: "Friends #5", Age: "21" },
    { name: "Friends #6", Age: "32" },
    { name: "Friends #7", Age: "44" },
    { name: "Friends #8", Age: "25" },
    { name: "Friends #9", Age: "30" },
  ];

  return (
    <FlatList
      // horizontal // align list horizontally
      // showsHorizontalScrollIndicator={false} // hide the horizontal scroll bar

      keyExtractor={(vv) => vv.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.Age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
