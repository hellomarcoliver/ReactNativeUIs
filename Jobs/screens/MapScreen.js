import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { MapView } from 'expo'

export default class MapScreen extends Component {

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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
