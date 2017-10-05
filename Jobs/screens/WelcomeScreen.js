/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class WelcomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
        <Text>Welcome Screen</Text>
        <Text>Welcome Screen</Text>
        <Text>Welcome Screen</Text>
        <Text>Welcome Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
