import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner, Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDV9ha8vPlNraqOVTWhs9uNFxdC5l4r-YM',
      authDomain: 'walltap-f8489.firebaseapp.com',
      databaseURL: 'https://walltap-f8489.firebaseio.com',
      storageBucket: 'walltap-f8489.appspot.com',
      messagingSenderId: '331388725629'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;

  }
}

  render() {
    return (
    // <Provider store={createStore()}>
      <View>
        <Header headerText="Sign Up | Sign In" />
        {this.renderContent()}
      </View>
    // </Provider>
    );
  }
}

export default App;
