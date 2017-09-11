// import libraries
import React from 'react';
import { Text, View } from 'react-native';

// first child component (App is root component)
// make component –always need a function for that
// the props property is used to make the copy more generic
const Header = (props) => {
  //this below shortens styles.viewStyle further down after return statement
  const { textStyle, viewStyle } = styles;
  //add the prop for style
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// add style to Header component
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4
  },
  textStyle: {
    fontSize: 20
  }
};

// make component available
export { Header };
