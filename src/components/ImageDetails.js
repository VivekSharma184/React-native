import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ imagereq, imgScore, title }) => {
  return (
    <View>
      <Image source={imagereq} />
      <Text>{title}</Text>
      <Text>Image Score - {imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
