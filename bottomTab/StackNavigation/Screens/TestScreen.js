
import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../MyStyle.css";

const TestScreen = ({navigation}) => {
    return (
      <View style={styles.centerShow}>
        <Text style={styles.text}>This is Test Screen Page</Text>
        <Button title="Go to Demo Screen" color='red' onPress={ () => navigation.navigate("Demo") } />
        <Button title="Go Back" onPress={ () => navigation.goBack() } />
        <Button title="Go First Page" onPress={ () => navigation.popToTop() } />
      </View>
    )
  }

  export default TestScreen;