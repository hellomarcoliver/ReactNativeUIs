/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
});

export default class MyComponent extends Component {
  render() {
    return (
      <Home />
    );
  }
}



// new version
// const App = () => (
//   <View style={styles.container}>
//     <Text>Open up App to start working on your app! OK</Text>
//   </View>
// );


// old function
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }
