import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

const Buttons = () => {
    const { addButton, subButton } = styles;
    // constructor() {
    //   super();
    //   this.state = { taps: 0};
    // }
    //
    // onAdd = () => {
    //   this.setState({
    //     taps: this.state.taps + 1
    //   });
    // }
    return (
      <View>
        {/* <Text>{this.state.taps}</Text> */}
        <Text>height</Text>
        <TouchableOpacity onPress={() => { this.onAdd() }} style={addButton}>
            <Image source={require('./common/plus.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { console.log('subtract'); }} style={subButton}>
            <Image source={require('./common/minus.png')} />
        </TouchableOpacity>
      </View>
    );
};

const styles = {
    addButton: {
      top: 450,
      left: 50,
      width: 105
    },
    subButton: {
      top: 345,
      left: 250,
      width: 105
    }
};

export { Buttons };
