/* Purpose: Render the list of libraries */

import React, { Component } from 'react';
import { connect } from 'react-redux';

//here, we need to reach out to the data –the state (.json)
class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

//take our global state object, map it and provide them as props to our
//component of LibraryList
const mapStateToProps = state => {
  // console.log(state);
  //this is an object with key of dataToShow1 and current state
  //this gets passed on to the component above
  return { dataToShow1: state.dataToShow1 };
};

//connect gives access to our app state inside a given component
//connect get called, then follows a call for LibraryList
export default connect(mapStateToProps)(LibraryList);
