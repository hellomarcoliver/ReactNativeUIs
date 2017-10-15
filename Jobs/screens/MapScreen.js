import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { MapView } from 'expo'
import { connect } from 'react-redux'
// import { navigation, screenProps } from 'react-navigation'
import { Button, Icon } from 'react-native-elements'

import * as actions from '../actions/Index'

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Job Map',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="my-location" size={20} color={tintColor} />;
    }
  })

  // set default state for map with region
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }
  // once loaded – show the map
  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  // define callback
  onRegionChangeComplete = (region) => {
    console.log(region)
    this.setState({region})
  }

  // we are passing a callback to fetchJobs
  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck')
    })
  }

  render () {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete} //a prop with ref to callback to update state on map drag
        />
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={{ borderRadius: 30 }}
            large
            title="Show Jobs In This Area"
            backgroundColor="#03A9F4"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress} // leave bind.this out 'cause we use arrow function'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
})

// use connect helper to wire up our actions object
export default connect(null, actions)(MapScreen);
