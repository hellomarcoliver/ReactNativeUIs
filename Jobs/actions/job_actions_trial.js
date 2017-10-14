// code from Vincent:
// https://www.udemy.com/react-native-advanced/learn/v4/questions/2451352

import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import { FETCH_JOBS } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript',
};

const buildJobsUrl = zipCode => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zipCode });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let zipCode = await reverseGeocode(region);
    const url = buildJobsUrl(zipCode);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};

map_screen.js

import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import * as actions from '../actions';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  };

  static propTypes = {
    fetchJobs: PropTypes.func,
    navigate: PropTypes.func,
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck');
    });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={‌{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={‌{ flex: 1 }}>
        <MapView
          style={‌{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={‌{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(MapScreen);
