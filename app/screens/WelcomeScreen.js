const {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} = require('react-native');
import React from 'react';
import * as Speech from 'expo-speech';
//React-Native/React/Redux snippets for shortcut

class WelcomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.png')}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Minions' Intelligence Agency
            <Button
              style={styles.tummyButton}
              title='CLICK HERE'
              onPress={() => {
                Speech.speak(messageOne, messageOptions);
              }}
            />
          </Text>
        </View>

        <View style={styles.loginButton}>
          <Button
            style={styles.chanllengeButton}
            title='Chanllenge'
            //"Images" is how the name defined on App.js Stack.Screen
            onPress={() =>
              this.props.navigation.navigate(`Player's Intelligence Result`)
            }
          ></Button>
        </View>
        <View style={styles.registerButton}>
          <Button
            style={styles.chanllengeButton}
            title={`Test Minions' intelligence`}
            //"Images" is how the name defined on App.js Stack.Screen
            onPress={() => {
              this.props.navigation.navigate(`Testing Minions' Intelligence`);
            }}
          ></Button>
        </View>
      </ImageBackground>
    );
  }
}
//SPEECH
const messageOne = `blahblahblah, As, minions, we are very proud of our intelligent! Don't believe us? We will show you......Click test,Minions' intelligence now `;
const messageQuestion = `Answer me two questions, and I will know if you an adult or a child!`;
const messageOptions = {
  language: 'en',
  pitch: '10',
  rate: '1.1',
};

//rnss
const styles = StyleSheet.create({
  background: {
    //Fit entire screen2020-10-01-23-48-55.png
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  chanllengeButton: {},
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
    alignItems: 'center',
    alignContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
    color: 'yellow',
  },
  logoContainer: {
    position: 'absolute',
    top: 50, //50pixel on the top of the screen
    alignItems: 'center',
  },
  tummyButton: {
    position: 'absolute',
    top: 140,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});

export default WelcomeScreen;
