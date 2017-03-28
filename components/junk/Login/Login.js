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

import { Actions } from 'react-native-router-flux';
// TODO: fix firebase module
// import { firebaseRef } from './components/services/Firebase';

export default class Login extends Component {
    // TODO: firebase shit down here
    //
    constructor(props)  {
      super(props)

      this.state = {
        email: '',
        password: '',
        status: ''
      }

      this._login = this._login.bind(this)
      this._register = this._register.bind(this)
    }

    _login()  {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    })
    _register() {
      Actions.register()
    }

    _onFocus()  {

    }
    render() {
        return (
            <Image source={require('assets/images/background.png')} style={styles.image}>
                <KeyboardAvoidingView behavior="padding" style={styles.keyContainer}>
                    <View style={styles.container}>
                        <TextInput placeholder="Email" returnKeyType="next" style={styles.input}/>
                        <TextInput placeholder="Password" returnKeyType="go" secureTextEntry style={styles.input}/>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOG IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.registerButton} onPress={this._register}>
                            <Text style={styles.registerButtonText}>Create Account | FaceBook Login</Text>
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
        // padding: 50
        // backgroundColor: 'black'
        // paddingTop: 200
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
