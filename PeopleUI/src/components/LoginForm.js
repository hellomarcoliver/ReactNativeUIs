import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
  //emailChanged is an action creator
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  //passwordChanged is an action creator
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  //the render method for the form
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            labelprop="Email"
            placeholderprop="type your email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            labelprop="Password"
            placeholderprop="type your password"
            //eventhandler –run a callback function
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <View style={styles.textboxStyle}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          </View>
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  },
  textboxStyle: {
    flex: 1
  }
};

//this is how we get the current state into our component
//from auth state
const mapsStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapsStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
