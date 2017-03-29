import React from 'react';
import { View, Text } from 'react-native';

const WallHeight = (props) => {
    const { wallCounter } = styles;
    return (
      <View>
        <Text style={wallCounter}>
          Wall Height: {props.wallHeight}
        </Text>
      </View>
    );
};

const styles = {
    wallCounter: {
      top: 450,
      left: 50,
      width: 105
    }
};
export { WallHeight };
