import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';

//retrieve width of the screen so we can use it for inputRange
//SCREEN_WIDTH will not change, that's why its outside the component
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250

export default class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          //create a helper function to reset card
          this.resetPosition();
        }
      }
    });

    this.state = { panResponder, position };
  }

  //makes it pop out of the screen
  forceSwipe(direction) {
    //Ternary Expression in ES6
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x: x * 2, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start();
  }

  //resets the card to 0,0
  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  //all the style for the card
  getCardStyle() {
    const { position } = this.state;
    //interpolation; tie two controls together such as move and rotate
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2.0, 0, SCREEN_WIDTH * 2.0],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate: rotate }] //can be shorten to rotate
    };
  }

  renderCardAll() {
    return this.props.data.map((argument2, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={argument2.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCardSingle2(argument2)}
            </Animated.View>
          );
        }

        return this.props.renderCardSingle2(argument2);
      });
    }

    render() {
      return (
        <View>
          {this.renderCardAll()}
        </View>
      );
    }
  }


  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  // });
