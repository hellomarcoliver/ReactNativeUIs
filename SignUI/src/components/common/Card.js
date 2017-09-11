// purpose of this component:
// add some resuable styling to AlbumsDetail

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    //making it possible to add children components
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    // adds spacing between cards
    marginTop: 10,
  }
};

export { Card };
