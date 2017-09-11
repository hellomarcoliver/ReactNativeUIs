// purpose of this component:
// add some reusable styling to Card

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    //making it possible to add children components
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    //this makes the avatar and name align in a row (see AlbumDetail)
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
};

export { CardSection };
