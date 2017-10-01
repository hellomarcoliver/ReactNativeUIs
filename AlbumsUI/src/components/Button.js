/* @flow */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//we use again the props.children trick
const Button = ({ whenPressed, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    //TouchableOpacity is used like a view tag –just wrap other elements
    //<TouchableOpacity onPress={() => console.log('pressed!')} style={buttonStyle}>
    // whenPressed is also called a callBack function
    <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, // stretch it for the whole width
    alignSelf: 'stretch',
    backgroundColor: '#0095FE',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#0095FE',
    marginRight: 5,
    marginLeft: 5
  }
};

export default Button;
