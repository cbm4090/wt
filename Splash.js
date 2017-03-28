import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, Text, View} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <Image source={require('assets/images/background.png')} style={styles.image}></Image>
        )
    }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
  }
});
