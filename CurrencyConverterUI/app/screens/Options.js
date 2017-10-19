import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

// the Options component gets wrapped with connectAlert below (export..)
class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handlePressThemes = () => {
    console.log('press themes (Options.js)');
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    console.log('press site (Options.js)');
    Linking.openURL('httpss://fixer.io').catch(() =>
      this.props.alertWithType(
        'info',
        'Sorry!',
        'This code is in Options.js and is connected to the AlertProvider component.',
      ),
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}
// pass Option as a function to the connectAlert function
// with this, we also get access to alertWithType – see top of page
export default connectAlert(Options);
