//React & React Native
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//Navigation
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Other Components
import WelcomeScreen from './app/screens/WelcomeScreen';
import AdultOrChildResult from './app/screens/AdultOrChildResult';
import AdultOrChildForm from './app/screens/AdultOrChildForm';
import SentenceResult from './app/screens/SentenceResult';
import SentenceForm from './app/screens/SentenceForm';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={WelcomeScreen} />
        <Stack.Screen
          name={`Minion's response`}
          component={AdultOrChildResult}
        />
        <Stack.Screen
          name={`Testing Minions' Intelligence`}
          component={AdultOrChildForm}
        />
        <Stack.Screen name={`Level 1`} component={SentenceForm} />
        <Stack.Screen name={`Level 1 - Result`} component={SentenceResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
