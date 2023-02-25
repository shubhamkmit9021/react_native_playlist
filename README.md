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

