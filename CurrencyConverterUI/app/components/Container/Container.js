// a component that wraps each screen in our app
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
// <Container>
//   <Text /> // Text would be the child of {children}
// </Container>
