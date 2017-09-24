import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
} from 'react-native';

export default class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
        // debugger
        // console.log(gestureState);
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };
  }

  renderCardAll() {
    return this.props.data.map(argument2 => {
      return this.props.renderCardSingle2(argument2);
    });
  }

  render() {
    return (
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCardAll()}
      </Animated.View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
