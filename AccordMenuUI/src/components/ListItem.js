import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1, lineHeight: 22, padding: 15, fontSize: 16 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            <View>
              {this.renderDescription()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

  const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15,
    }
  };

  //mapStateToProps is the interface from state to components
  const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
  };

  export default connect(mapStateToProps, actions)(ListItem);
