
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen";
import MessageScreen from "./Screens/MessageScreen";
import TestScreen from "./Screens/TestScreen";
import DemoScreen from "./Screens/DemoScreen";


const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Message" component={MessageScreen} options={{title:"Message Page", headerShown: true}} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Demo" component={DemoScreen} />
    </Stack.Navigator>

  )
}


const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App;

