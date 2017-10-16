import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { clearLikedJobs } from '../actions/Index'

class SettingsScreen extends Component {

  // pressAndBack() {
  //   const clearIt = this.props.clearLikedJobs
  //   const moveIt = this.props.navigation.navigate('review')
  // }

  render () {
    return (
      <View>
        <Button
          title="Reset All Liked Jobs"
          buttonStyle={{ borderRadius: 30, marginTop: 20 }}
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={() => {
            this.props.clearLikedJobs()
            this.props.navigation.navigate('review')
          }}
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

// needs no mapStateToProps 'cause' no need to consumeany state
// that's been maintained by redux
export default connect(null, { clearLikedJobs })(SettingsScreen);
