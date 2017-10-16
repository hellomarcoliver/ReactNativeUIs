import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions/Index';

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Jobs',
    tabBarIcon: ({ tintColor, focused }) => {
      return <Icon name="description" size={20} color={focused ? '#0095FE' : 'grey'} />; // doing a ternary
    }
  })

  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card
        title={job.jobtitle}
        titleStyle={{ height: 33 }}
        containerStyle={{ borderRadius: 20, borderColor: '#89DFFE', borderWidth: 1, shadowOpacity: 0 }}
        >
          <View style={{ height: 120 }}>
            <MapView
              scrollEnabled={false} // so that user input does not pan/zoom the map
              style={{ flex: 1 }} // this can be flex: 1
              cacheEnabled={Platform.OS === 'android' ? true : false} // render as static image
              initialRegion={initialRegion}
              >
              </MapView>
            </View>
            <View style={styles.detailWrapper}>
              <Text>{job.company}</Text>
              <Text>{job.formattedRelativeTime}</Text>
            </View>
            <Text style={{ height: 100 }}>
              {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
            </Text>
          </Card>
        );
      }

      // converted this into an arrow function to avoid binding 'this'
      // to the below function. So 'this' is refering to DeckScreen render Component
      // and not just the function. See onPress event below.
      renderNoMoreCards = () => {
        return (
          <Card title="No More Jobs">
            <Button
              buttonStyle={{ borderRadius: 30 }}
              title="Back To Map"
              large
              icon={{ name: 'my-location' }}
              backgroundColor="#03A9F4"
              onPress={() => this.props.navigation.navigate('map')}
            />
          </Card>
        );
      }

      render() {
        return (
          <View style={{ marginTop: 40 }}>
            <Swipe
              data={this.props.jobs}
              renderCard={this.renderCard} // no brackets to delay function call
              renderNoMoreCards={this.renderNoMoreCards}
              onSwipeRight={job => this.props.likeJob(job)}
              keyProp="jobkey"
            />
          </View>
        );
      }
    }

    const styles = {
      detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10
      }
    };

    function mapStateToProps({ jobs }) {
      return { jobs: jobs.results };
    }

    export default connect(mapStateToProps, actions)(DeckScreen);
