import React from 'react'
import { StyleSheet, View, AsyncStorage } from 'react-native'
import store from './store/Index'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Provider } from 'react-redux'

// import the two screens we are using in our MainNavigator
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DeckScreen from './screens/DeckScreen'
import MapScreen from './screens/MapScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

// this is the root component
export default class App extends React.Component {
  // note –in case you need to clear the FB token use this:
  // componentWillMount() {
  //   AsyncStorage.removeItem('fb_token')
  // }
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
        }, {
          tabBarPosition: 'bottom',
          lazy: true,
          animationEnabled: false,
          tabBarOptions: {
            labelStyle: { fontSize: 12 },
            showIcon: true,
            activeTintColor: '#0095FE',
            inactiveTintColor: 'grey'
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false
    })
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
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
