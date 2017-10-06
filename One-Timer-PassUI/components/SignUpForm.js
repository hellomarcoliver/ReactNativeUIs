/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput, Button, Card, Header } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-pass-8f41a.cloudfunctions.net';

export default class MyComponent extends Component {

  state = { phone: '' }; // initialize state object with ES7

  // make network request with promises, due to asynchronous calls
  // this ES7 syntax makes the .bind method obsolete in onPress...
  // try is for error handling if the network requests fail
  handleSubmit = async () => {
    try {
      let response = await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      console.log(response); // just to check
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    } catch (err) {
      console.log(err);
      // this.setState({ error: 'Something was not right' });
    }
  }

  render() {
    return (
      <Card
        containerStyle={{ borderWidth: 0 }}
        >
        <View style={{ marginBottom: 20 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            inputStyle={{ marginTop: 1 }}
            value={this.state.phone} // pass val from state to input
            onChangeText={phone => this.setState({ phone }) } // normally just onChange
          />
        </View>
        <Button
          onPress={this.handleSubmit}
          buttonStyle={{ borderRadius: 30, height: 40, marginBottom: 20 }}
          backgroundColor="#0095FE"
          title="View Now"
        />
      </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 90,
//     marginBottom: 90,
//     borderWidth: 1,
//     borderRadius: 2,
//     borderColor: '#DDD',
//     borderBottomWidth: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 1,
//     marginLeft: 5,
//     marginRight: 5,
//   }
// });
