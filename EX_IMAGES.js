import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const messageOne = 'Hello to my first expo game';
const messageOptions = {
  language: 'en',
  pitch: '1',
  rate: '1',
};
//rsf
function ViewImageScreen(props) {
  const handlePressSpeak = () => {
    Speech.speak(messageOne, messageOptions);
  };
  return (
    <ImageBackground
      resizeMode='contain'
      style={styles.image}
      source={require('../assets/image1.png')}
    >
      <Button title='Press to hear' onPress={handlePressSpeak} />
    </ImageBackground>
  );
}

//rnss
const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '50%',
  },
});

export default ViewImageScreen;
