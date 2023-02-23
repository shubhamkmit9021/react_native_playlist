import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import ShowData from "./Components/ShowData.jsx";

const App = () => {
  return (
    <View style={styles.box1}>
      <ShowData />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  box1: {
    marginTop: Platform.OS === "android" ? 30 : 0,

    // marginTop:40
  }
});
