import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Buttons } from './Buttons';
import { StoreButton } from './StoreButton';
import { numberWithCommas } from '../helpers';
import firebase from 'firebase';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallHeight: 0,
      voteAdd: 0,
      voteSub: 0,
      user: null
    };
    this.onAdd = this.onAdd.bind(this);
    this.onSubtract = this.onSubtract.bind(this);
    this.firebase = firebase;
    this.base = firebase.database();
  }
  getWallHeight() {
    this.base.ref('wallHeight').on('value', (snap) => {
      this.setState({ wallHeight: snap.val() });
    }, err => console.log(err));
  }
  componentDidMount = () => {
    this.getWallHeight();
  }

  onAdd() {
    this.setState(prevState => {
      return { wallHeight: prevState.wallHeight += 666, voteAdd: prevState.voteAdd + 666 };
    });
  }
  onSubtract() {
    this.setState(prevState => {
      return { wallHeight: prevState.wallHeight -= 666, voteSub: prevState.voteSub -666 };
    });
  }

  render() {
    return (
      <Image source={require('./common/images/main.png')} style={styles.backgroundImage}>
      <View>
        <View style={styles.headContainer}>
          <Text style={styles.header}>Wall Height:</Text>
          <Text style={styles.wallHeight}>{numberWithCommas(this.state.wallHeight)} ft.</Text>
      </View>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Your Votes:</Text>
          <Text style={styles.yourVotes}>{numberWithCommas(this.state.voteAdd)} ft.</Text>
          <Text style={styles.yourVotes}>{numberWithCommas(this.state.voteSub)} ft.</Text>
        </View>
        <StoreButton image={require('./common/images/appstore.png')} />
        <Buttons add={true} image={require('./common/images/plus.png')} onPress={this.onAdd} />
        <Buttons subtract image={require('./common/images/minus.png')} onPress={this.onSubtract} />
      </View>
    </Image>
    );
  }
}

const styles = {
  headContainer: {
    marginLeft: 10,
    top: 30,
    // backgroundColor: 'red'
  },
  textContainer: {
    top: 315,
    marginLeft: 10,
    // backgroundColor: 'red'
  },
  header: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  wallHeight: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10
  },
  yourVotes: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10
  }
};

export default MainPage;

//
// getYourVotes(user) {
//   this.base.ref(`users/${user.uid}`).on('value', (snap) => {
//     this.setState({ yourVotes: { up: snap.val().up, down: snap.val().down } });
//   }, err => console.log(err));
// }
//
// changeUserState = (user) => {
//   this.setState({ user: user });
//   this.getYourVotes(user);
// }
