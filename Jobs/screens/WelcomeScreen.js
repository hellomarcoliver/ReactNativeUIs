import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import Slides from '../components/Slides'

// SLIDE_DATA passed the content for each slide into our view as an object
const SLIDE_DATA = [
  { text: 'Welcome to this App ', color: '#03A9F4' },
  { text: 'Set your location ', color: '#A3A1F4' },
  { text: 'Have fun!', color: '#A9E2F4' }
]

export default class WelcomeScreen extends Component {

  // navigation gets handed down as a prop to the WelcomeScreen
  // on the navigation prop is the function navigate
  // (WelcomeScreen is beeing render by the TabNavigator from React-Navigation)
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render () {
    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
