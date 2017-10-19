// Define root component and set global backgroundcolor

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Themes from './screens/Themes';

// creating variables for styles
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',

  // this adds an outline to all components for better debugging
  outline: 0,
});

export default () => <Themes />;

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
