/* OK */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


// Root Component
class App extends Component {
  componentWillMount() {
    // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyA2XkwdIRpJYB0FaRiPqsr_JBt50jCsfxc',
    authDomain: 'peopleui-ba67f.firebaseapp.com',
    databaseURL: 'https://peopleui-ba67f.firebaseio.com',
    projectId: 'peopleui-ba67f',
    storageBucket: 'peopleui-ba67f.appspot.com',
    messagingSenderId: '6406361676'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
