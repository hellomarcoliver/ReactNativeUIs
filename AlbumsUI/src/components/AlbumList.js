/* @flow */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// class based components needs render method
// whenever you use state, you go with a class besed function
class AlbumList extends Component {
  // set up initial state for our component AlbumList
  state = { AlbumsUI: [] };

  // update the AlbumList component with data from the link below
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ AlbumsUI: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

/* this is a functional component which returns jsx
const AlbumList = () => {
  return (
    <View>
      <Text>Album List</Text>
    </View>
  );
};
*/

export default AlbumList;
