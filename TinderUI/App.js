import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

//dummy data
const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Cardio #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Cardio #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Cardio #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {
  //function renderCardSingle to create card with data
  //why
  renderCardSingle1(argument1) {
    return (
      <Card
        key={argument1.id} //is a unique token, otherwise an issue pops up
        title={argument1.text}
        image={{ uri: argument1.uri }}

      >
        <Text style={{ marginBottom: 10 }}>
          Here we can add some image subtitles. Was far as it goes.
          The lines get pushed down.
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="red"
          title="View Now"
        />
      </Card>
    );
  }

  //function to show stuff ok
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCardSingle2={this.renderCardSingle1}
        />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
