import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Platform,
} from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import { navigation, screenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { MapView } from 'expo'

class ReviewScreen extends Component {
  // customize the header for the ReviewScreen
  // this is a class level property (don't have access to props)
  // navigationOptions is an object
  static navigationOptions = ({ navigation }) => ({
    title: 'Liked Jobs',
    tabBarIcon: ({ tintColor, focused }) => {
      return <Icon name="favorite" size={20} color={focused ? '#0095FE' : 'grey'} />;
    },
    headerRight: (
      <Button
        title="Settings"
        onPress={() => { navigation.navigate('settings') }}
        buttonStyle={{ borderRadius: 30, height: 30, width: 90 }}
        // icon={{ name: 'settings' }}
        backgroundColor="#0095FE"
      />
    )
  })

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { company, formattedRelativeTime, url, longitude, latitude, jobtitle, jobkey } = job
      const initialRegion = {
        longitude,
        latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      }

      return (
        <Card
          title={jobtitle}
          key={jobkey}
          containerStyle={{ borderRadius: 20, borderColor: '#89DFFE', borderWidth: 1, shadowOpacity: 0 }}
        >
            <View style={{ height: 200 }}>
              <MapView
                style={{ flex: 1 }}
                cacheEnabled={Platform.OS === 'android'}
                scrollEnabled={false}
                initialRegion={initialRegion}
              />
              <View style={styles.detailWrapper}>
                <Text style={styles.italics}>{company}</Text>
                <Text style={styles.italics}>{formattedRelativeTime}</Text>
              </View>
              <Button
                buttonStyle={{ borderRadius: 30 }}
                title="Apply Now"
                backgroundColor="#03A9F4"
                onPress={() => Linking.openURL(url)}
              />
            </View>
          </Card>
        )
      })
    }

    render () {
      return (
        <ScrollView>
          {this.renderLikedJobs()}
        </ScrollView>
      )
    }
  }

  const styles = {
    container: {
      flex: 1
    },
    italics: {
      fontStyle: 'italic'
    },
    detailWrapper: {
      marginTop: 10,
      marginBottom: 10,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  }

  function mapStateToProps(state) {
    return { likedJobs: state.likedJobs }
  }

  export default connect(mapStateToProps)(ReviewScreen)
