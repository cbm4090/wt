import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

const TrumpButton = ({ onPress }) => {
    const { buttonStyle, trumpHead, clickMe } = styles;
    return (
      <View>
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Image source={require('./images/trump.png')} style={trumpHead} />
            <Text style={clickMe}>
              Click Me To Sign Up | Sign In
            </Text>
            <Text style={clickMe}>
              Haz Clic Aqui Para Registrarte | Acceder
            </Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = {
    buttonStyle: {
      top: 255,
      // flex: 1,
      justifyContent: 'center',
      // backgroundColor: 'red'
    },

    trumpHead: {
      left: 125,
      // backgroundColor: 'blue'
    },
    clickMe: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'ARCADECLASSIC'
    }
};

export { TrumpButton };
