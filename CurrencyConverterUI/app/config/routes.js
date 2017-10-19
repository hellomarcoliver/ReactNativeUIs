import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

// this is nested inside the route navigator below
// another single screen StackNavigator: HomeStack
const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  // adding another configuration object
  {
    headerMode: 'screen', // making the drawer come in smoothly
  },
);

// another single screen StackNavigator: CurrencyListStack
const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

// the route navigator
// this actually gets passed on into (app)index.js
export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  // adding another configuration object
  {
    mode: 'modal',
    // removes 2nd header, which is caused by nesting the navigators
    headerMode: 'none',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
