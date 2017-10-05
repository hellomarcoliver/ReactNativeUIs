import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

// import the two screens we are using in our MainNavigator
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'

// this is the root component
export default class App extends React.Component {
  render () {
    // this defines how we navigate through the screens
    // passing in an object
    // welcome is a route we can refer to
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen }
    })

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center', // aligns horizontally
    // justifyContent: 'flex-end' // aligns vertically
  }
})
