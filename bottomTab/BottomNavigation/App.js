

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screens/HomeScreen";
import MessageScreen from "./Screens/MessageScreen";
import TestScreen from "./Screens/TestScreen";
import DemoScreen from "./Screens/DemoScreen";


const Tab = createBottomTabNavigator();
const MyStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Message" component={MessageScreen} options={{title:"Message Page", headerShown: true}} />
      <Tab.Screen name="Test" component={TestScreen} />
      <Tab.Screen name="Demo" component={DemoScreen} options={{headerShown:false}} />
    </Tab.Navigator>

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

