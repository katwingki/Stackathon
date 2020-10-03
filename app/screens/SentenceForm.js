import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import * as Speech from 'expo-speech';
import { TouchableOpacity } from 'react-native-gesture-handler';

const messageQuestion = `blahblahblah, Welcome to minionized tricky question number 1, enter the first sentence that comes in your mind to pass this level. litlittle hint don't forget the punctuation. Let's go `;
const messageOptions = {
  language: 'en',
  pitch: '10',
  rate: '1.1',
};

class SentenceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      sentence: '',
      speak: true,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(SenEntered) {
    this.setState({ sentence: SenEntered, speak: false });
  }

  handleSubmit() {
    this.props.navigation.navigate(`Level 1 - Result`, {
      sentence: this.state.sentence,
    });
    this.setState({
      sentence: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.state.speak
            ? Speech.speak(messageQuestion, messageOptions)
            : null}
          <Text style={styles.header}>
            Enter the first complete sentence that comes in your mind:
          </Text>
        </View>
        <ScrollView onBlur={Keyboard.dismiss}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Enter a complete sentence'
              maxLength={50}
              value={this.state.sentence}
              onChangeText={this.handleFormChange}
            />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#ffbf80',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 15,
    backgroundColor: '#74d8d1',
    padding: 15,
    margin: 20,
  },
  submitButtonText: {
    color: '#000066',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SentenceForm;
