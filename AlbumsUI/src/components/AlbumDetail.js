// purpose of this component:
// show summary of one Album

import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
// replaced view tag with card, since it's a wrapper
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
  //destructuring and removed 'props' as an attribute from above
  //we can now remove props.album ... below
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;
  //do the same with styles.thumbnailStyle and styles.headerContentStyle
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    subheaderTextStyle,
    imageStyle
  } = styles;

  // in curly brackets it would be prop.album.image, but we destructured it (line 39)
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={subheaderTextStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        {/* whenPressed is a prop so button does sth diff. anytime a user presses it */}
        {/* we need to reference now whenPressed in Button.js */}
        <Button whenPressed={() => Linking.openURL(url)}>
          Buy on Amazon
        </Button>
      </CardSection>
    </Card>
  );
};

// define all styles for components/tags above
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 14
  },
  subheaderTextStyle: {
    fontSize: 12
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1, //make it full width
    width: null // make it full width
    }
};

// make it available in other parts of the app
export default AlbumDetail;
