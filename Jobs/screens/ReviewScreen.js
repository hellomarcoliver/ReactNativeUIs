import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'
import { navigation, screenProps } from 'react-navigation'

export default class ReviewScreen extends Component {
  // customize the header for the ReviewScreen
  // this is a class level property (don't have access to props)
  // navigationOptions is an object
  static navigationOptions = ({ navigation }) => ({
      title: 'Review Jobs',
      headerRight: (
        <Button
          title="Settings"
          onPress={() => { navigation.navigate('settings') }}
          buttonStyle={{ borderRadius: 30 }}
          icon={{ name: 'settings' }}
          backgroundColor="#0095FE"
        />
      )
    });

    render () {
      return (
        <View style={styles.container}>
          <Text>Review Screen</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  })
