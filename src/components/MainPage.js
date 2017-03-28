import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Buttons } from './Buttons';

class MainPage extends Component {
  render() {
    return (
      <Image source={require('./common/main.png')} style={styles.backgroundImage}>
      <View>
        <Buttons />
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

export default MainPage;
