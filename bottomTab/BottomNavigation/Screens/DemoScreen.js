import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../MyStyle.css";

const DemoScreen = ({navigation}) => {
    return (
      <View style={styles.centerShow}>
        <Text style={styles.text}>This is Demo Screen Page</Text>
        <Button title="Go Back" onPress={ () => navigation.goBack() } />
        <Button title="Go First Page" onPress={ () => navigation.popToTop() } />
      </View>
    )
  }

  export default DemoScreen;