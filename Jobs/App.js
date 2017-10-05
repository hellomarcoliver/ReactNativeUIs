import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

// import the two screens we are using in our MainNavigator
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

// this is the root component
export default class App extends React.Component {
  render () {
    // this defines how we navigate through the screens
    // passing in an object 'MainNavigator'
    // welcome... is a 'route' we can refer to
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        },
        {
          tabBarPosition: 'bottom',
          lazyLoad: true,
          animationEnabled: false
        })
      },
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      lazyLoad: true,
      animationEnabled: false
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
    paddingTop: Constants.statusBarHeight
  }
})