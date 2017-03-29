import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create | Login
      </Button>
    );
  }

  render() {
    return (
      <Image source={require('./common/images/main.png')} style={styles.backgroundImage}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

          <CardSection>
            <Text style={styles.or}>

            </Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <TouchableOpacity style={styles.facebook} onClick={() => this.authenticate('facebook')} >
              <Text style={styles.textStyle}>
                Log In with Facebook
              </Text>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <TouchableOpacity style={styles.twitter} onClick={() => this.authenticate('twitter')} >
              <Text style={styles.textStyle}>
                Log In with Twitter
              </Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
      </Image>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  facebook: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#3864a3',
    borderRadius: 30,
    borderWidth: 2,
    width: 30,
    borderColor: 'white',
    marginLeft: 5,
    paddingBottom: 10,
    marginRight: 5
  },
  twitter: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#0084b4',
    borderRadius: 30,
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
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
 })(LoginForm);
