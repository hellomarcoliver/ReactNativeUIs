//this Component handles all the interaction with the form and renders elements

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in Now
      </Button>
    );
  }

//Input tag is referred to creating controlled components
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholderprop="user@gmail.com"
            labelprop="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholderprop="password"
            labelprop="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'red',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default LoginForm;
