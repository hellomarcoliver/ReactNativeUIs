/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'

// get the window dimensions so we can use it later for the horiz. scroll
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Slides extends Component {
  renderSlides = () => {
    return this.props.data.map(slide => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
          >
          <Text style={styles.textStyle}>{slide.text}</Text>
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
