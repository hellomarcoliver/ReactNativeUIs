import React from 'react';
import { StyleSheet, Text, ScrollView, View, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import { Header, Card } from 'react-native-elements';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAlwJZgoCVHBUcVfj_rYNFq8leovy4FD2w',
      authDomain: 'one-time-pass-8f41a.firebaseapp.com',
      databaseURL: 'https://one-time-pass-8f41a.firebaseio.com',
      projectId: 'one-time-pass-8f41a',
      storageBucket: 'one-time-pass-8f41a.appspot.com',
      messagingSenderId: '917477331800'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
          <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'One-Timer-Password-UI', style: { color: '#fff' } }}
            // rightComponent={{ icon: 'home', color: '#fff' }}
            // statusBarProps={{ barStyle: 'default' }}
            outerContainerStyles={{ backgroundColor: '#0095FE', borderBottomWidth: 0 }}
            // innerContainerStyles={{ backgroundColor: '#000' }}
          />
        </View>
        <KeyboardAwareScrollView style={{ marginTop: 90 }}>
          <View>
            <SignUpForm />
            <SignInForm />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89DFFE',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
  }
});

// This apparently moves the screen when clicking on an input field
// Didn't work last time I tested / 06.10.2017
// <KeyboardAwareScrollView
//   enableAutoAutomaticScroll={true}
//   keyboardOpeningTime={0}
//  >
