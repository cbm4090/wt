import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
// TODO: fix firebase module
// import { firebaseRef } from './components/services/Firebase';

export default class Main extends Component {
    // TODO: firebase shit down here
    render() {
        return (
            <Image source={require('assets/images/mainpage.png')} style={styles.image}>
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        Wall Height
                    </Text>
                    <Text style={styles.welcome}>
                        123,912,123,124,123,41
                    </Text>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null
    },
    container:  {
        top: 12,
        padding: 10
    },
    heading: {
        fontFamily: 'ArcadeClassic',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black'
    },
    welcome: {
        fontFamily: 'ArcadeClassic',
        fontSize: 15,
        textAlign: 'left',
        marginTop: 4,
        color: 'black'
    }
});
