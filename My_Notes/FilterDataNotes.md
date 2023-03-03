
````js

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert
} from "react-native";

const ShowData = () => {
  let [myData, setMyData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let [allDataVisible, setAllDataVisible] = useState(true)
  let [input, setInput] = useState("");

  const handleSort = () => {
    setAllDataVisible(false);
    Alert.alert(`Your Entered Text is : ${input}`)
    const res = myData.filter(item =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(res);
  };

  let FetchData = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMyData(res);
        console.log(res);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <ScrollView style={style.box}>
      <TextInput
        placeholder="Enter text here for search"
        style={style.textInput}
        onChangeText={(t) => setInput(t)}
      />
      <Button onPress={handleSort} title="Click Me" color="green" />
      {
        (allDataVisible) && 

        <View>
          <Text style={{fontSize:24, textAlign:'center', marginTop:10}}>All Data</Text>
          {
            myData.map( (res) => 

              <View style={style.post} key={res.id}>
                <Text style = {{fontSize:18}}>{res.id} : {res.title}</Text>
                <Text>{res.body}</Text>
              </View> )
          }
        </View>
        
      }

      {
        (!allDataVisible) && 

        <View>
          <Text style={{fontSize:24, textAlign:'center', marginTop:10}}>Filtered Data</Text>
          {
            filteredData.map( (res) => 

              <View style={style.post} key={res.id}>
                <Text style = {{fontSize:18}}>{res.id} : {res.title}</Text>
                <Text>{res.body}</Text>
              </View> )
          }
        </View>
        
      }

    </ScrollView>
  );
};

export default ShowData;

const style = StyleSheet.create({
  box: {
     alignSelf: "center",
     marginHorizontle:45,
     width:'90%'
  },
  textInput: {
    borderWidth: 1,
    marginVertical: 20,
    borderRadius:8,
    padding:6,
    width:'90%',
    alignSelf:'center'
  },
  post: {
    borderWidth: 1,
    marginVertical: 10,
    padding:10,
    borderRadius:8
  }
});


````

