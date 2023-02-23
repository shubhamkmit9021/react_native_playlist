
import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../MyStyle.css";

const MessageScreen = ({navigation}) => {
    return (
      <View style={styles.centerShow}>
        <Text style={styles.text}>Hii Shubham ! This is Message Page.</Text>
        <Button title="Go to Test Screen" color='red' onPress={ () => navigation.navigate("Test") } />
        <Button title="Go Back" onPress={ () => navigation.goBack() } />
        <Button title="Go First Page" onPress={ () => navigation.popToTop() } />
      </View>
    )
  }

  export default MessageScreen;