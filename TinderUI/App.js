import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

//dummy data
const DATA = [
  { id: 1, uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', text: 'Card #1' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {
  //function renderCardSingle to create card with data
  renderCardSingle1(argument1) {
    return (
      <Card
        containerStyle={{ borderRadius: 20 }}
        key={argument1.id} //is a unique token, otherwise an issue pops up
        image={{ uri: argument1.uri }}
        title={argument1.text}
      >
        <Text style={styles.textStyle}>{argument1.text}</Text>
        <Text style={{ marginBottom: 10 }}>
          Here we can add some image subtitles. Was far as it goes.
          The lines get pushed down.
        </Text>
        <Button
          buttonStyle={{ borderRadius: 30 }}
          icon={{ name: 'code' }}
          backgroundColor="red"
          title="View Now"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There is no more content.
        </Text>
        <Button
          backgroundColor="red"
          title="Get more cards!"
        />
      </Card>
    );
  }

  //function to show all the stuff
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCardSingle2={this.renderCardSingle1}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginBottom: 10, }
});
