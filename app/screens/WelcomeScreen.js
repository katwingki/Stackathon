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
import { TouchableOpacity } from 'react-native-gesture-handler';
//React-Native/React/Redux snippets for shortcut

//SPEECH
const messageOne = `blahblahblah, helloooo, WE, the awesome minions, are searching for our next terific  Master , blahblahblah, As, minions, we are very proud of our intelligent,  Don't believe us? We will show you......Click test Minions now `;
const messageQuestion = `Answer me two questions, and I will know if you an adult or a child!`;
const messageOptions = {
  language: 'en',
  pitch: '10',
  rate: '1.1',
};

class WelcomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.png')}
      >
        {Speech.speak(messageOne, messageOptions)}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Want to become our next master?</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate(`Level 1`)}
        >
          <Text style={styles.submitButtonText}> Master Challenge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            this.props.navigation.navigate(`Testing Minions' Intelligence`);
          }}
        >
          <Text style={styles.submitButtonText}>Test Minions</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

//rnss
const styles = StyleSheet.create({
  background: {
    //Fit entire screen2020-10-01-23-48-55.png
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: 250,
    borderWidth: 8,
    borderColor: 'white',
    borderRadius: 15,
    backgroundColor: '#74d8d1',
    padding: 5,
    margin: 1,
    alignContent: 'center',
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
    color: 'yellow',
  },
  logoContainer: {
    position: 'absolute',
    top: 35, //50pixel on the top of the screen
    alignItems: 'center',
    margin: 5,
  },
  tummyButton: {
    position: 'absolute',
    top: 140,
  },
  registerButton: {
    width: 250,
    borderWidth: 8,
    borderColor: 'white',
    borderRadius: 15,
    backgroundColor: '#ff9933',
    padding: 5,
    margin: 20,
    alignContent: 'center',
  },
  submitButtonText: {
    color: '#000066',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
