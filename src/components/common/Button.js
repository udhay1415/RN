import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) =>{
  const {buttonStyle, textStyle} = styles
  return(
    <TouchableOpacity onPress={props.clicked} style={buttonStyle}>
      <Text style={textStyle}> Login </Text>
    </TouchableOpacity>
  );
};

const styles={
  buttonStyle:{
    flex:1,
    alignSelf:'stretch',
    height:45,
    marginRight:5,
    marginLeft:5,
    backgroundColor:'#FFF',
    borderWidth:2,
    borderRadius:3,
    borderColor:'green'
  },
  textStyle:{
    flex:1,
    alignSelf:'center',
    fontSize:20,
    fontWeight:'500',
    paddingTop:5,
    paddingBottom:5,
    color:'green'
  }
};

export {Button};
