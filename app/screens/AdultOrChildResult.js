import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import brain from 'brain.js';
import * as Speech from 'expo-speech';

const networkAdultOrChild = new brain.NeuralNetwork();
networkAdultOrChild.train(
  [
    { input: { height: 1, weight: 20 }, output: { child: 1 } },
    { input: { height: 2, weight: 40 }, output: { child: 1 } },
    { input: { height: 3, weight: 60 }, output: { child: 1 } },
    { input: { height: 4, weight: 80 }, output: { child: 1 } },
    { input: { height: 5, weight: 100 }, output: { adult: 1 } },
    { input: { height: 6, weight: 140 }, output: { adult: 1 } },
    { input: { height: 7, weight: 180 }, output: { adult: 1 } },
    { input: { height: 8, weight: 220 }, output: { adult: 1 } },
  ].map(normalize)
);

function normalize(item) {
  return {
    input: normalizeInput(item.input),
    output: item.output,
  };
}

function normalizeInput(input) {
  return {
    height: input.height / 10,
    weight: input.weight / 300,
  };
}
const messageOptions = {
  language: 'en',
  pitch: '10',
  rate: '1.1',
};
function AdultOrChildResult(props) {
  const heightEntered = props.route.params.height;
  const weightEntered = props.route.params.weight;
  console.log(heightEntered, weightEntered);
  const resultAdultOrChild = networkAdultOrChild.run(
    normalizeInput({
      height: heightEntered,
      weight: weightEntered,
    })
  );
  const percentageAdult = (resultAdultOrChild.adult * 100).toFixed(2);
  const percentageChild = (resultAdultOrChild.child * 100).toFixed(2);
  const message = `blahblahblah, Easy peasy lemon squeezy. We are ${
    percentageAdult > percentageChild
      ? ` ${percentageAdult}`
      : ` ${percentageChild}`
  }
  % certain that you are ${
    percentageAdult > percentageChild ? 'an adult' : 'a child'
  }}`;
  return (
    <View style={styles.background}>
      <View style={styles.generalContainer}>
        {Speech.speak(message, messageOptions)}
        <Text style={styles.textStyle}>
          {'\n'}We are
          {percentageAdult > percentageChild
            ? ` ${percentageAdult}`
            : ` ${percentageChild}`}
          % certain that you are{' '}
          {percentageAdult > percentageChild ? 'an adult' : 'a child'}
          {'\n'}
        </Text>
      </View>
      <View style={styles.generalContainer1}>
        <Text style={styles.questionStyle}> Am I right ? </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#4ecdc4',
  },
  generalContainer: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 50, //50pixel on the top of the screen
    alignItems: 'center',
    backgroundColor: '#ffbf80',
  },
  generalContainer1: {
    position: 'absolute',
    top: 150, //50pixel on the top of the screen
    alignItems: 'center',
  },
  textStyle: {
    flex: 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Avenir',
    padding: 2,
  },
  questionStyle: {
    flex: 3,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AdultOrChildResult;
