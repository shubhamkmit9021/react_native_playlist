
## General UseCase Props of TextInput

````js

import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

const CustomTextInput = () => {
    const [value, setValue] = useState('')

    const DisplayFun = () => {
        Alert.alert("Enterd Text is: ",value)
        setValue('');
    }
  return (
    <View style={mystyle.box}>
      <Text style={mystyle.text}> Student Dashboard</Text>
        <View style={mystyle.inputbox}>
            <TextInput
                                    // onFocus={ () => do something }
                                    // onBlur={ () => do something }
              editable={true}      // true / false  bydefault- true
              multiline={false}     // true / false  bydefault- false
              numberOfLines={1}    // we can define numofLine
              maxLength={50}       // we can define maxlength
              autoCapitalize='words'   // ('none', 'sentences', 'words', 'characters')
              keyboardType="default"   // ('default', 'number-pad', 'decimal-pad', 'numeric', 'email-address', 'phone-pad',  'url')     
              textAlign='left'         // ('left', 'center', 'right')
              spellCheck = {true}
              secureTextEntry = {false}   // Does not work with multiline={true}.
              placeholder="Enter Student Name"
              placeholderTextColor='blue'
            //   inlineImageRight='icon'
              style={mystyle.textinputbox}
              value={value}
              onChangeText={ (t) => setValue(t)}
              />
        </View>
        <View style={mystyle.btnbox}>
            <Button title='click Me' onPress={DisplayFun} />
        </View>
    </View>
  )
}

export default CustomTextInput;

const mystyle = StyleSheet.create({
    box:{
        margin:6
    },
    text:{
        fontSize:22,
        color:'#ffffff',
        textAlign:'center'
    },
    btnbox:{
        marginVertical:15
    },
    inputbox:{
        marginVertical:15
    },
    textinputbox:{
        borderWidth:1,
        borderRadius:8,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        color:'red',
        fontSize:22,
        
    },
    
})

````