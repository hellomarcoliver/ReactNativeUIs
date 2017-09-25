import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  UIManager,
  LayoutAnimation,
} from 'react-native';

//retrieve width of the screen so we can use it for inputRange
//SCREEN_WIDTH will not change, that's why its outside the component
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250

export default class Deck extends Component {
  //define a class propery in the constructor, to avid warning for non
  //defined onSwipeRight and onSwipeLeft
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true, //with 3 big callBacks
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

    this.state = { panResponder, position, index: 0 };
  }

  componentWillReceive(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }


  //tells react to animate every card when moving up 10px
  //UIManager line is just for Android
  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  //makes it pop out of the screen
  forceSwipe(direction) {
    //Ternary Expression in ES6
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x: x * 2, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    //go into our list of data, retrieve the record we are currently
    // swiping, assign it to item
    const argument2 = data[this.state.index];
    direction === 'right' ? onSwipeRight(argument2) : onSwipeLeft(argument2);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
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
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-40deg', '0deg', '40deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate: rotate }] //can be shortend to rotate
    };
  }

  renderCardAll() {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((argument2, indexB) => {
      if (indexB < this.state.index) { return null; }

      if (indexB === this.state.index) {
        return (
          <Animated.View
            key={argument2.id}
            style={[this.getCardStyle(), styles.cardStyle]}
            {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCardSingle2(argument2)}
            </Animated.View>
          );
        }

        return (
          <Animated.View
            key={argument2.id}
            style={[styles.cardStyle, { top: 10 * (indexB - this.state.index) }]}
            >
              {this.props.renderCardSingle2(argument2)}
            </Animated.View>
          );
        }).reverse(); //to make first card appear on top
      }

      render() {
        return (
          <Animated.View>
            {this.renderCardAll()}
          </Animated.View>
        );
      }
    }


    const styles = {
      cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
      },
    };
