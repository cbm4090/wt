import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { TrumpButton } from './common/TrumpButton';

export default class Splash extends Component {
    render() {
        return (
            <Image source={require('./common/images/signup.png')} style={styles.image}>
              <View>
                <TrumpButton />
              </View>
            </Image>
        );
    }
}

const styles = {
  image: {
    flex: 1,
    width: null,
    height: null,
  }
};
