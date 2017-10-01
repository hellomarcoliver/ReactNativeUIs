// code for ios

// import a library to create react native component
import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// this is the root component or roo view
// create a react native component
// actually -do component nesting
const App = () => (
  // flex says: please expand this component to the entire screen
  <View style={styles.container}>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <Header headerText={'AlbumsUI'} />
    <AlbumList />
  </View>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#89DFFE',
  }
};

// render it to the devices
// remeber to use the app name –in this case its the folder name AlbumsUI
AppRegistry.registerComponent('AlbumsUI', () => App);
