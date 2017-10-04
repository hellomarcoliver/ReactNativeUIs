/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-pass-8f41a.cloudfunctions.net';

export default class MyComponent extends Component {
  // this is same as line below: state = { phone ... }
  // constructor(props) {
  //   super(props);
  //   this.state = { phone: '' };
  // }

  state = { phone: '' }; // initialize state object with ES7

  // make network request
  // this ES7 syntax makes the .bind method obsolete in onPress...
  handleSubmit = () => {
    axios.post(`${ROOT_URL}/createUser`, {
      phone: this.state.phone
    }).then(() => {
      axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            inputStyle={{ height: 40 }}
            value={this.state.phone} // pass val from state to input
            onChangeText={phone => this.setState({ phone }) } // normally just onChange
          />
        </View>
        <Button
          onPress={this.handleSubmit}
          buttonStyle={{ borderRadius: 30, height: 40 }}
          backgroundColor="#0095FE"
          title="View Now"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});
