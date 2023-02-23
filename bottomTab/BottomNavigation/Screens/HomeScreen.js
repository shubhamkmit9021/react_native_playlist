
import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../MyStyle.css";

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.centerShow}>
        <Text style={styles.text}>This is Home Page</Text>
        <Button title="Go to Message Screen" color='red' onPress={ () => navigation.navigate("Message") } />
        <Button title="Go to Demo Screen" onPress={ () => navigation.navigate("Demo") } />
      </View>
    )
  }

  export default HomeScreen;