import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

const Buttons = (props) => {
    const { addButton, subButton, container } = styles;
    return (
      <View style={container}>
        <TouchableOpacity onPress={() => props.onPress()} style={props.add ? addButton : subButton}>
            <Image source={props.image} />
        </TouchableOpacity>
      </View>
    );
};

const styles = {
    addButton: {
      top: 350,
      left: 50,
      width: 105,
      // backgroundColor: 'blue'
    },
    subButton: {
      top: 245,
      left: 260,
      width: 105,
      // backgroundColor: 'blue'
    },
    container: {
      // backgroundColor: 'blue'
    }
};
export { Buttons };
