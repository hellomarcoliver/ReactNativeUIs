/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'
import { Button } from 'react-native-elements'

// get the window dimensions so we can use it later for the horiz. scroll
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Slides extends Component {

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="    Start now    "
          raised
          containerViewStyle={{ borderRadius:30, margin: 20 }}
          buttonStyle={{ borderRadius: 30 }}
          // icon={{ name: 'settings' }}
          backgroundColor="#0095FE"
          onPress={this.props.onComplete} // no brackets so onComplete doesn't get called immediatelly
        />
      )
    }
  }

  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
          >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        // style={{ flex: 1 }}
        >
          {this.renderSlides()}
        </ScrollView>
      )
    }
  }

  const styles = {
    slideStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: SCREEN_WIDTH
    },
    textStyle: {
      fontSize: 30,
      color: 'white'
    }
  };
