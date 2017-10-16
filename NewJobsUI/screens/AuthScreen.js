import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions/Index'

// debugger;

class AuthScreen extends Component {
  componentDidMount () {
    AsyncStorage.removeItem('fb_token') // this will remove the FB token again
    this.props.facebookLogin()
    this.onAuthComplete(this.props)
  }
  // this is a lifecycle method –gets executed whenever the
  // component renders again. Needed to shuffled the token into
  // the this component
  componentWillReceiveProps (nextProps) {
    this.onAuthComplete(nextProps)
  }

  onAuthComplete (props) {
    if (props.token) {
      this.props.navigation.navigate('map')
    }
  }

  render () {
    return (
      <View />
    )
  }
}

function mapStateToProps ({ auth }) {
  return { token: auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen)
