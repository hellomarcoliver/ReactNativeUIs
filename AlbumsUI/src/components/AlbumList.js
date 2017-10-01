import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// class based components needs render method
// whenever you use state, you go with a class besed function
class AlbumList extends Component {
  // set up initial state for our component AlbumList
  state = { AlbumsUI: [] };
  // update the AlbumList component with data from the link below
  // this is also called a lifecycle method
    componentWillMount() {
      // ASYNC HTTP Request to get albums from the API.
      // eslint-disable-next-line
      fetch('https://api.myjson.com/bins/dzyn1')
      .then((response) => { return response.json() } )
      .catch((error) => console.warn("fetch error:", error))
      .then((responseData) => this.setState({ AlbumsUI: responseData }));
    }

// produce the array and also provide data to AlbumDetail
  renderAlbums() {
    return this.state.AlbumsUI.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

// render it to the screen
// we replaced View tag with the ScrollView to make it scrollable
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
