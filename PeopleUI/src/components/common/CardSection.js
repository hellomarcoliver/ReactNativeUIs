import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    //we can pass in an array, so the style most to
    //the right will overwrite whats left. We use that
    //to reposition the picker and make it sit 'column'
    //instead of 'row'
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
