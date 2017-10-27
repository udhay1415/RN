import React from 'react';
import { View,Text,TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle }=styles;
  return(
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput underlineColorAndroid='transparent'
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = {
  inputStyle:{
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:21,
    lineHeight:25,
    flex:2

  },
  labelStyle:{
    fontSize:21,
    paddingLeft:10,
    color:'green',
    flex:1
  },
  containerStyle:{
    height:45,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
};
export {Input};
