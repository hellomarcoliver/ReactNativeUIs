import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  // darken the input field and lock editable mode
  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  // render the input fields
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

// define the type of the prop so we can easily debug later
// see: https://www.npmjs.com/package/prop-types
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
