//React & React Native
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//Navigation
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Other Components
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={WelcomeScreen} />
        <Stack.Screen name='Images' component={ViewImageScreen} />
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
