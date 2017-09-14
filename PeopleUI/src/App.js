/* OK */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
