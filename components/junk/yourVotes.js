import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Device from 'react-native-device'

export default class YourVotes extends Component{

  constructor(props){
    super(props)
  }
  render(){
    const displayName = this.props.displayName
    console.log(displayName);

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {displayName[displayName.length - 1] === 's' ? displayName + "'" : displayName + "'s"} Votes
        </Text>
        <Text style={styles.welcome}>
          Add: {this.props.yourVotes.trump}
          // TODO: remove trump, replace with add

        </Text>
        <Text style={styles.welcome}>
          Remove: {this.props.yourVotes.clinton}
          // TODO: remove clinton, replace with remove
          ////////////////////////////////////////////
          <Text style={styles.welcome}>
            {this.props.yourVotes.clinton}
            {displayName[displayName.length - 2] === 's' ? displayName "" : displayName + "'s"} Votes
          </Text>
        </Text>
      </View>
    )
  }

}

const styles = getStyles()

function getStyles(){
  if(Device.width === 320){
    return  StyleSheet.create({
      container: {
        flex: 1,
        top: 160,
        marginLeft: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'flex-start'
      },
      heading: {
        fontFamily: 'ArcadeClassic',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left'

      },
      welcome: {
        fontFamily: 'ArcadeClassic',
        fontSize: 15,
        textAlign: 'left',
        marginTop: 4
      }
    });
  }
  else if(Device.width === 375){
    return StyleSheet.create({
     container: {
       flex: 1,
       top: 215,
       marginLeft: 20,
       backgroundColor: 'rgba(0,0,0,0)',
       alignItems: 'flex-start'
     },
     heading: {
       fontFamily: 'ArcadeClassic',
       fontSize: 25,
       fontWeight: 'bold',
       textAlign: 'left'

     },
     welcome: {
       fontFamily: 'ArcadeClassic',
       fontSize: 15,
       textAlign: 'left',
       marginTop: 4
     }
   });
  }
  else if(Device.width === 414){
    return StyleSheet.create({
     container: {
       flex: 1,
       top: 255,
       marginLeft: 20,
       backgroundColor: 'rgba(0,0,0,0)',
       alignItems: 'flex-start'
     },
     heading: {
       fontFamily: 'ArcadeClassic',
       fontSize: 25,
       fontWeight: 'bold',
       textAlign: 'left'

     },
     welcome: {
       fontFamily: 'ArcadeClassic',
       fontSize: 15,
       textAlign: 'left',
       marginTop: 4
     }
   });
  }
}
