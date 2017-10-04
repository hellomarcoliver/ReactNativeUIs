import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import SignUpForm from './components/SignUpForm';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar
            backgroundColor="red"
            barStyle="light-content"
          />
          <Header
            // leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'One-Timer-Password-UI', style: { color: '#fff' } }}
            // rightComponent={{ icon: 'home', color: '#fff' }}
            // statusBarProps={{ barStyle: 'default' }}
            outerContainerStyles={{ backgroundColor: '#0095FE', borderBottomWidth: 0 }}
            // innerContainerStyles={{ backgroundColor: '#000' }}
          />
        </View>
        <View>
          <SignUpForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
