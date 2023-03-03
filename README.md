# react_native_playlist

## for bottom navigation in react-native
  
  ### npm install @react-navigation/native @react-navigation/bottom-tabs
  
  ````js
  
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
    <NavigationContainer>    //  wrapping with NavigationContainer is must
      <MyStack />
    </NavigationContainer>
  )
}

export default App;

````

## for Stack navigation in react-native

  ### npm install @react-navigation/native @react-navigation/native-stack
  
  ***If you have a bare React Native project, install the dependencies with npm:***

     npm install react-native-screens react-native-safe-area-context

  ***If you have an Expo managed project, install the dependencies with expo:***

      npx expo install react-native-screens react-native-safe-area-context
  
  ````js
  
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

````

