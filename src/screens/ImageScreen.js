import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imagereq={require("../../assets/forest.jpg")}
        imgScore={7}
      />
      {/* sending this parent data to child ie to image details */}
      <ImageDetails
        title=" Mountain"
        imagereq={require("../../assets/mountain.jpg")}
        imgScore={8}
      />
      <ImageDetails
        title=" Beach"
        imagereq={require("../../assets/beach.jpg")}
        imgScore={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
