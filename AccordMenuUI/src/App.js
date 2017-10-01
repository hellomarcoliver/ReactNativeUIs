import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    //Here we create the redux store
    //Note: Provider tag can only have one child
    //thats why we wrap all with a view tag
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Header headerText="Accordion Menu UI" style={{ backgroundColor: '#89DFFE' }}/>
        <LibraryList />
      </View>
    </Provider>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#89DFFE',
  }
};

export default App;
