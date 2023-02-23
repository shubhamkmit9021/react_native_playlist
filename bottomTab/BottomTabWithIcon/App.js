


import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./Screens/HomeScreen";
import MessageScreen from "./Screens/MessageScreen";
import TestScreen from "./Screens/TestScreen";
import DemoScreen from "./Screens/DemoScreen";
import  {MaterialCommunityIcons}  from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {Octicons} from'@expo/vector-icons'


const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
  
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color }) => (
              <Octicons name="diff-added" color={color} size={26} />
            ),
          }}
        />
  
        <Tab.Screen
          name="Test"
          component={TestScreen}
          options={{
            tabBarLabel: 'Test',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bell-o" color={color} size={26} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Demo"
          component={DemoScreen}
          options={{
            tabBarLabel: 'Demo',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="shopping-bag" color={color} size={26} />
            ),
          }}
        />  
  
      </Tab.Navigator>
  
      
    );
  }
// const MyStack = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Message" component={MessageScreen} options={{title:"Message Page", headerShown: true}} />
//       <Tab.Screen name="Test" component={TestScreen} />
//       <Tab.Screen name="Demo" component={DemoScreen} options={{headerShown:false}} />
//     </Tab.Navigator>

//   )
// }


const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

export default App;

