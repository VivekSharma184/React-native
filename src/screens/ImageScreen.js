import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title="Forest" />
      {/* sending this parent data to child ie to image details */}
      <ImageDetails title=" Mountain" />
      <ImageDetails title=" Beach" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
