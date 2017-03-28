'use strict';

var React = require('react-native');

var {StyleSheet} = React;

module.exports = StyleSheet.create({
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
