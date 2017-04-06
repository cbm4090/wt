// import _ from 'lodash'; //
import React, { Component } from 'react';
// import { connect } from 'react-redux';  //
import { View, Image, Text } from 'react-native';
// import { HeightActions } from '../actions' //
import { Buttons } from './Buttons';
import { StoreButton } from './StoreButton';
import { numberWithCommas } from '../helpers';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallHeight: 0,
      voteAdd: 0,
      voteSub: 0,
      voteMult: 1,
      user: null
    };
    this.onAdd = this.onAdd.bind(this);
    this.onSubtract = this.onSubtract.bind(this);
 }
  onAdd() {
    this.setState(prevState => {
      return { wallHeight: prevState.wallHeight += 1, voteAdd: prevState.voteAdd + 1 };
    });
  }
  onSubtract() {
    this.setState(prevState => {
      return { wallHeight: prevState.wallHeight -= 1, voteSub: prevState.voteSub -1 };
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

          <Text style={styles.header}>Vote Multiplier:</Text>
          <Text style={styles.voteMult}>{numberWithCommas(this.state.voteMult)}</Text>
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
    top: 30
  },
  textContainer: {
    top: 315,
    marginLeft: 10
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
  },
  voteMult: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: 10
  }
};

export default MainPage;
