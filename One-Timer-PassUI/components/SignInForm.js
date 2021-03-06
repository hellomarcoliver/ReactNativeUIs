/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput, Button, Card } from 'react-native-elements';
import firebase from 'firebase';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-pass-8f41a.cloudfunctions.net';

export default class MyComponent extends Component {

  state = { phone: '', code: '' }; // initialize state object with ES7

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code // we can destructure this.state if we like
      });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Card
        containerStyle={{ borderWidth: 0 }}
      >
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            inputStyle={{ marginTop: 1 }}
            value={this.state.phone} // pass val from state to input
            onChangeText={phone => this.setState({ phone }) } // normally just onChange
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            inputStyle={{ marginTop: 1 }}
            value={this.state.code} // pass val from state to input
            onChangeText={code => this.setState({ code }) } // normally just onChange
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
//     marginTop: 20,
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
