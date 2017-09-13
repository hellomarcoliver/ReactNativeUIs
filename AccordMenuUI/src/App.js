/* OK */

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    //Provider tag can only have one child
    //thats why we wrap all with a view tag
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Accordion Menu UI" />
        <LibraryList />
    </View>
    </Provider>
  );
};

export default App;
