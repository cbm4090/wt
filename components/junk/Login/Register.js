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
import CardSection from './CardSection';
import Card from './Card';
// TODO: fix firebase module
// import { firebaseRef } from './components/services/Firebase';

export default class Register extends Component {
    // TODO: firebase shit down here
    render() {
        return (
            <Image source={require('assets/images/background.png')} style={styles.image}>
                <KeyboardAvoidingView behavior="padding" style={styles.keyContainer}>
                    <View style={styles.container}>
                                <TextInput placeholder="Email" returnKeyType="next" style={styles.input}/>
                                <TextInput placeholder="Password" returnKeyType="next" secureTextEntry style={styles.input}/>
                            <TextInput placeholder="Verify Password" returnKeyType="go" secureTextEntry style={styles.input}/>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                            </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
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
    registerButton: {
        // textAlign: 'center'
    },
    registerButtonText: {
        textAlign: 'center',
        padding: 25
    },
    keyContainer: {
        height: 800
    },
    container: {
        padding: 30,
        top: 400
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius: 64
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
