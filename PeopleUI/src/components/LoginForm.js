import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
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
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

//this is how we get the current state into our component
const mapsStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapsStateToProps, { emailChanged, passwordChanged })(LoginForm);
