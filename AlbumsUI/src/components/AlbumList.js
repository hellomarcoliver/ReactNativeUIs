import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// class based components needs render method
// whenever you use state, you go with a class besed function
class AlbumList extends Component {
  // set up initial state for our component AlbumList
  state = { AlbumsUI: [] };

  // update the AlbumList component with data from the link below
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ AlbumsUI: response.data }));
  }

// produce the array and also prop down data to AlbumDetail
  renderAlbums() {
    return this.state.AlbumsUI.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

// render it to the screen
  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
