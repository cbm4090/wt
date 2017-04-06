import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDV9ha8vPlNraqOVTWhs9uNFxdC5l4r-YM',
      authDomain: 'walltap-f8489.firebaseapp.com',
      databaseURL: 'https://walltap-f8489.firebaseio.com',
      storageBucket: 'walltap-f8489.appspot.com',
      messagingSenderId: '331388725629'
  };

firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

// const fb = firebase
// .initializeApp(config)
// .database()
// .ref();
// fb.on('value', snapshot => {
//   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
//   snapshot.val();
// })
