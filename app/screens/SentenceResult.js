import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import brain from 'brain.js';
import * as Speech from 'expo-speech';

const training = [
  { phrase: "I love dogs, they're so cute.", result: { good: 1 } },
  {
    phrase: 'Such as electrical, chemical, and industrial engineering.',
    result: { bad: 1 },
  },
  {
    phrase:
      'Purdue offers many majors in engineering, such as electrical, chemical, and industrial engineering.',
    result: { good: 1 },
  },
  {
    phrase: 'She told a story with deep thoughts and emotions.',
    result: { good: 1 },
  },
  { phrase: 'A story with deep thoughts and emotions.', result: { bad: 1 } },
  { phrase: 'I love my mom.', result: { good: 1 } },
  { phrase: 'love it!', result: { bad: 1 } },
  { phrase: 'I am going to school.', result: { good: 1 } },
  { phrase: 'going to school.', result: { bad: 1 } },
  { phrase: 'Toys of all kinds were thrown everywhere.', result: { good: 1 } },
  { phrase: 'Toys of all kinds thrown everywhere.', result: { bad: 1 } },
];

//This was from the brainExample-Boiler-Maker API using natural library
const dictionary = [
  'I',
  'love',
  'dogs,',
  "they'r",
  'so',
  'cute.',
  'such',
  'as',
  'electrical,',
  'chemical,',
  'and',
  'industri',
  'engineering.',
  'purdu',
  'offer',
  'mani',
  'major',
  'in',
  'engineering,',
  'she',
  'told',
  'a',
  'stori',
  'with',
  'deep',
  'thought',
  'emotions.',
  'A',
  'my',
  'mom.',
  'it!',
  'am',
  'go',
  'to',
  'school.',
  'toi',
  'of',
  'all',
  'kind',
  'were',
  'thrown',
  'everywhere.',
];

function encode(phrase) {
  const phraseTokens = phrase.split(' ');
  const encodedPhrase = dictionary.map((word) =>
    phraseTokens.includes(word) ? 1 : 0
  );

  return encodedPhrase;
}

const trainingSetAfterEncoded = training.map((dataSet) => {
  const encodedValue = encode(dataSet.phrase);
  return { input: encodedValue, output: dataSet.result };
});

const network = new brain.NeuralNetwork();
network.train(trainingSetAfterEncoded);
const messageOptions = {
  language: 'en',
  pitch: '10',
  rate: '1.1',
};
function SentenceResult(props) {
  //

  const sentence = props.route.params.sentence;
  //const sentence = 'I hope this is working.';
  const encoded = encode(sentence);
  const results = network.run(encoded);
  console.log('Results here', sentence, 'is', results);

  // const notASentence = 'Why is it not working?';
  // const results1 = encode(notASentence);
  // console.log('not a sentence', notASentence, network.run(results1));

  let certaintyComplete = (results.good * 100).toFixed(2);
  let certaintyIncomplete = (results.bad * 100).toFixed(2);

  const message = `${
    certaintyComplete > certaintyIncomplete
      ? `teerrific, you pass,`
      : `uh-oh, oh-no, `
  }Based on our minions-ize analysis, we are ${
    certaintyComplete > certaintyIncomplete
      ? certaintyComplete
      : certaintyIncomplete
  }% certain that the sentence you entered, "${sentence}" , is ${
    certaintyComplete > certaintyIncomplete
      ? ' a complete sentence'
      : `not a complete sentence`
  }`;

  return (
    <View style={styles.background}>
      <View style={styles.generalContainer}>
        {Speech.speak(message, messageOptions)}
        <Text style={styles.textStyle}>
          {'\n'}
          {`Based on our minions-ize analysis, we are ${
            certaintyComplete > certaintyIncomplete
              ? certaintyComplete
              : certaintyIncomplete
          }% certain that the sentence you entered "${sentence}" is ${
            certaintyComplete > certaintyIncomplete
              ? `a complete sentence.`
              : `not a complete sentence.`
          }`}
          {'\n'}
        </Text>
      </View>
      {/* <View style={styles.generalContainer1}> */}
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/happy2Minion.png')}
      ></Image>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#4ecdc4',
  },
  generalContainer: {
    flex: 1,

    width: '100%',
    height: 300,
    position: 'absolute',
    top: 50, //50pixel on the top of the screen
    alignItems: 'center',
    backgroundColor: '#ffbf80',
  },
  generalContainer1: {
    position: 'absolute',
    top: 300, //50pixel on the top of the screen
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '70%',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Avenir',
    alignContent: 'center',
    padding: 2,
    margin: 10,
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

export default SentenceResult;
