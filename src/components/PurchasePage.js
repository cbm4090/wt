import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
// import dismissKeyboard from 'react-native-dismiss-keyboard';

class PurchasePage extends Component {
  render() {
    return (
      <Image source={require('./common/images/store.png')} style={styles.backgroundImage}>
      <View>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
        <Text>test</Text>
      </View>
    </Image>
    );
  }
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
};

export default PurchasePage;
