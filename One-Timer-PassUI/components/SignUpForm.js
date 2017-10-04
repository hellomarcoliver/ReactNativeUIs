/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput />
        </View>
        <Button title="Request Code Now"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
