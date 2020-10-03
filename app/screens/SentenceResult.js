import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import brain from 'brain.js';
import * as Speech from 'expo-speech';
// import natural from 'natural';
// import fs from 'react-native-fs';
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

//Building dictionary
// function buildWordDictionary(trainingData) {
//   const tokenisedArray = trainingData.map((item) => {
//     const tokens = item.phrase.split(' ');
//     return tokens.map((token) => natural.PorterStemmer.stem(token));
//   });

//   const flattenedArray = [].concat.apply([], tokenisedArray);
//   return flattenedArray.filter((item, pos, self) => self.indexOf(item) == pos);
// }

// const dictionary = buildWordDictionary(training);
// console.log('dictionary', dictionary);

// function encode(phrase) {
//   const phraseTokens = phrase.split(' ');
//   const encodedPhrase = dictionary.map((word) =>
//     phraseTokens.includes(word) ? 1 : 0
//   );

//   return encodedPhrase;
// }

// const trainingSetAfterEncoded = training.map((dataSet) => {
//   const encodedValue = encode(dataSet.phrase);
//   return { input: encodedValue, output: dataSet.result };
// });

// const network = new brain.NeuralNetwork();
// network.train(trainingSetAfterEncoded);

const messageOptions = {
  language: 'en',
  pitch: '10',
  rate: '1.1',
};
function SentenceResult(props) {
  //props.route.params.sentence
  // const sentence = 'I hope this is working.';
  // const results = encode(sentence);
  // console.log('Results here "I am sad.', network.run(results));

  // const notASentence = 'Why is it not working?';
  // const results1 = encode(notASentence);
  // console.log('not a sentence', notASentence, network.run(results1));

  // let certaintyComplete = (results.good * 100).toFixed(2);
  // let certaintyIncomplete = (results.bad * 100).toFixed(2);

  // const message = `Based on our minions-lize analysis, the sentence you entered is ${
  //   certaintyComplete > certaintyIncomplete
  //     ? ' a complete sentence'
  //     : `an incomplete sentence`
  // }`;
  const message = 'helloooo';
  return (
    <View style={styles.background}>
      <View style={styles.generalContainer}>
        {Speech.speak(message, messageOptions)}
        <Text style={styles.textStyle}>
          {'\n'}I don't know
          {/* {`Based on our minions-lize analysis, the sentence you entered is ${
            certaintyComplete > certaintyIncomplete
              ? ` ${certaintyComplete}% a complete sentence`
              : ` ${certaintyIncomplete}% an incomplete sentence`
          }`} */}
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

export default SentenceResult;
