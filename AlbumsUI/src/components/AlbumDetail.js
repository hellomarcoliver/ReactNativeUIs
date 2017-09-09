import React from 'react';
import { Text } from 'react-native';
// replaced view tag with card, since it's a wrapper
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
