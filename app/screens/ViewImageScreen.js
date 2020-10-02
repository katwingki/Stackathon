import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

//rsf
function ViewImageScreen(props) {
  return (
    <Image
      resizeMode='contain'
      style={styles.image}
      source={require('../assets/image1.png')}
    ></Image>
  );
}

//rnss
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
