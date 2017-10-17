import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
// <Container>
//   <Text /> // Text would be the child of {children}
// </Container>
