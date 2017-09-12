//this Component pulls it all together

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  //null says "I don't know if you are loggedIn"

  componentWillMount() {
    firebase.initializeApp({
          apiKey: 'AIzaSyCcJm4pg185zW2f0dwXA7-f6ZmsCI6Y1Kc',
          authDomain: 'signui-auth.firebaseapp.com',
          databaseURL: 'https://signui-auth.firebaseio.com',
          projectId: 'signui-auth',
          storageBucket: 'signui-auth.appspot.com',
          messagingSenderId: '875076028626'
    });

//watches the callback onAuthStateChanged if user is loggedIn or loggedOut
// also called conditional rendering
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

//show follow up screen (to log out)
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Card>
          <View style={styles.topWrapper}>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out Now
            </Button>
          </CardSection>
        </View>
      </Card>
      );
      case false:
      return <LoginForm />;
      default:
      return <Spinner size="small" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="AuthenticationUI" />
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
  }
});

export default App;
