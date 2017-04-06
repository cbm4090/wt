import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { CardSection } from './common';
// import dismissKeyboard from 'react-native-dismiss-keyboard';

const alertMessage = 'Your current vote counter has been multiplied by 2!';
const alertMessage1 = 'Your current vote counter has been multiplied by 4!';
const alertMessage2 = 'Your current vote counter has been multiplied by 8!';
const alertMessage3 = 'Your current vote counter has been multiplied by 1,000!';

class PurchasePage extends Component {
  render() {
    return (
      <Image source={require('./common/images/store.png')} style={styles.backgroundImage}>
      <View>
        <CardSection>
          <TouchableOpacity style={styles.itemButton} onPress={() => Alert.alert('Thank you for your purchase!', alertMessage)} >
            <Text style={styles.textStyle}>
              The Shoveler
            </Text>
            <Image source={require('./common/images/shovel.png')} style={styles.iconImage} />
            <Text style={styles.itemDesc}>
              Votes x2
            </Text>
            <Text style={styles.priceText}>
              $1.99
            </Text>
          </TouchableOpacity>
        </CardSection>

        <View style={styles.containerStyle}>
          <TouchableOpacity style={styles.itemButton3} onPress={() => this.authenticate('firebase')} >
            <Text style={styles.itemDesc2}>
              Votes x2
            </Text>
            <Text style={styles.priceText}>
              $.99
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerStyle}>
          <TouchableOpacity style={styles.itemButton3} onPress={() => Alert.alert('Thank you for your purchase!', alertMessage1)} >
            <Text style={styles.itemDesc2}>
              Votes x4
            </Text>
            <Text style={styles.priceText}>
              $1.99
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerStyle}>
          <TouchableOpacity style={styles.itemButton3} onPress={() => Alert.alert('Thank you for your purchase!', alertMessage2)} >
            <Text style={styles.itemDesc2}>
              Votes x8
            </Text>
            <Text style={styles.priceText}>
              $4.99
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerStyle}>
          <TouchableOpacity style={styles.itemButton3} onPress={() => Alert.alert('Thank you for your purchase!', alertMessage3)} >
            <Text style={styles.itemDesc2}>
              Votes x1,000
            </Text>
            <Text style={styles.priceText}>
              $99.99
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Image>
    );
  }
}

const styles = {
  itemButton2: {
    flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: 'burlywood',
    borderRadius: 0,
    borderWidth: 2,
    // width: 10,
    borderColor: 'black',
    marginLeft: 5,
    paddingBottom: 10,
    marginRight: 5
  },
  itemButton3: {
    flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: 'lightsteelblue',
    borderRadius: 50,
    borderWidth: 2,
    // width: 10,
    borderColor: 'black',
    marginLeft: 5,
    paddingBottom: 10,
    marginRight: 5
  },
  itemButton4: {
    flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: '#6A5ACD',
    borderRadius: 0,
    borderWidth: 2,
    // width: 10,
    borderColor: 'black',
    marginLeft: 5,
    paddingBottom: 10,
    marginRight: 5
  },
  itemButton5: {
    flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: 'gold',
    borderRadius: 0,
    borderWidth: 2,
    // width: 10,
    borderColor: 'black',
    marginLeft: 5,
    paddingBottom: 10,
    marginRight: 5
  },
  priceText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
    // paddingTop: 5,
    // paddingBottom: 5
  },
  itemDesc2: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  itemButton: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#87CEEB',
    borderRadius: 25,
    borderWidth: 2,
    width: 30,
    borderColor: 'white',
    marginLeft: 5,
    paddingBottom: 10,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
    // backgroundColor: 'red'
  },
  itemDesc: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  iconImage: {
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginLeft: 10
  },
  containerStyle: {
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'black',
    position: 'relative',
    width: 200,
  }
};

export default PurchasePage;
