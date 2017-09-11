import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  //this is a lifecycle method which gets auto loaded
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCcJm4pg185zW2f0dwXA7-f6ZmsCI6Y1Kc',
      authDomain: 'signui-auth.firebaseapp.com',
      databaseURL: 'https://signui-auth.firebaseio.com',
      projectId: 'signui-auth',
      storageBucket: 'signui-auth.appspot.com',
      messagingSenderId: '875076028626'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authenticate" />
        <Text>Ho</Text>
      </View>
    );
  }
}

export default App;
