import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Sign Up | Sign In" />
      </Scene>

      <Scene key="main">
        <Scene key="mainPage" component={MainPage} title="Wall Tap" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
