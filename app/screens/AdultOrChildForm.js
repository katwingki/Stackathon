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

class AdultOrChildForm extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      weight: 0,
      speak: true,
    };
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHeightChange(heightEntered) {
    this.setState({ height: heightEntered, speak: false });
  }

  handleWeightChange(weightEntered) {
    this.setState({ weight: weightEntered });
  }

  handleSubmit() {
    this.props.navigation.navigate(`Minion's response`, {
      height: this.state.height,
      weight: this.state.weight,
    });
    this.setState({
      height: 0,
      weight: 0,
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
            Answer these two questions, and I will know if you are an adult or a
            child!
          </Text>
        </View>
        <ScrollView onBlur={Keyboard.dismiss}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Your height in feet'
              maxLength={20}
              value={this.state.height}
              onChangeText={this.handleHeightChange}
              keyboardType={'numeric'}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Your weight in pound'
              maxLength={20}
              value={this.state.weight}
              keyboardType={'numeric'}
              onChangeText={this.handleWeightChange}
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
const messageQuestion = `blahblahblah, Answer these two questions, and we will know if you an adult or a child!`;
const messageOptions = {
  language: 'en',
  pitch: '10',
  rate: '1.1',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: 'lightyellow',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
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
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AdultOrChildForm;
