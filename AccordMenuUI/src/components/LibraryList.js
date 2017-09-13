/* Purpose: Render the list of libraries */

import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//here, we need to reach out to the data –the state (.json)
class LibraryList extends Component {
  componentWillMount() {
    //initialize data list view (this can be copied)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.dataToShow1);
  }

  //render a specific row
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    // console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

//take our global state object, map it and provide them as props to our
//component of LibraryList
const mapStateToProps = state => {
  //this is an object with key of dataToShow1 and current state
  //this gets passed on to the component above
  return { dataToShow1: state.dataToShow1 };
};

//connect gives access to our app state inside a given component
//connect get called, then follows a call for LibraryList
export default connect(mapStateToProps)(LibraryList);
