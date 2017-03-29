import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

const StoreButton = (props) => {
    const { storeButton, container } = styles;
    return (
      <View style={container}>
        <TouchableOpacity style={storeButton}>
            <Image source={props.image} />
        </TouchableOpacity>
      </View>
    );
};

const styles = {
    storeButton: {
      top: 250,
      left: 365,
      width: 45,
      // backgroundColor: 'red'
    },
    container: {
      // backgroundColor: 'red'
    }
};
export { StoreButton };
