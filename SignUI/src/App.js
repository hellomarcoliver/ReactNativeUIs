//this Component pulls it all together

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
          apiKey: 'AIzaSyCcJm4pg185zW2f0dwXA7-f6ZmsCI6Y1Kc',
          authDomain: 'signui-auth.firebaseapp.com',
          databaseURL: 'https://signui-auth.firebaseio.com',
          projectId: 'signui-auth',
          storageBucket: 'signui-auth.appspot.com',
          messagingSenderId: '875076028626'
    });

//whatch the callback onAuthStateChanged if user is loggedIn or loggedOut
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <View style={styles.topWrapper}>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        </View>
      );
      case false:
      return <LoginForm />;
      default:
      return (
        <View style={styles.spinnerWrapper}>
          <Spinner size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = ({
  topWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  spinnerWrapper: {
    marginTop: 100
  }
});

export default App;
