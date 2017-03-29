import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
import Splash from './components/Splash';
import PurchasePage from './components/PurchasePage';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 50 }}>
      <Scene key="auth">
        <Scene onRight={() => Actions.login()} rightTitle="Sign Up | Sign In" key="splash" component={Splash} title="Splash" />
        <Scene key="login" component={LoginForm} title="Sign Up | Sign In" />
        {/* <Scene key="mainPage" component={MainPage} hideNavBar={true} /> */}
      </Scene>

      <Scene key="main">
        <Scene onRight={() => Actions.purchasePage()} rightTitle="Shop" key="mainPage" component={MainPage} hideNavBar={false} />
        <Scene key="purchasePage" component={PurchasePage} title="Almacenar" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
