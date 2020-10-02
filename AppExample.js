import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
//React Native do not have html
//View is the <div>, React Native will map it to UIView(for IOS), map it to AndroidView
//Text is for text block
//StyleSheet: plain JS native similar to CSS
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

//Better use functional component in React Native as it is simple & lightweight
//Avoid class component
export default function App() {
  //height: landscape? '100%':"30%"
  const { landscape } = useDeviceOrientation();
  //handle Function
  const handlePress = () => console.log('Text is pressed ');

  //JSX expression
  return (
    // style={[styles.container, styles.container2]}
    <SafeAreaView style={styles.container}>
      {/* ALT PRESS FUNC: onPress={() => console.log('Text Clicked')} */}
      <Text numberOfLines={1} onPress={handlePress}>
        Hello my love Aiden!Hello my love Aiden!Hello my love Aiden!Hello my
        love Aiden!
      </Text>
      <TouchableHighlight onPress={() => console.log('Touchable Tapped')}>
        <Image
          blurRadius={10}
          // loadingIndicatorSource={}  //similar to source
          // fadeDuration={1000} //1sec, no IOS
          source={{
            width: '50%',
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>
      {/* Always save the image under Asset to avoid extended loading time  */}
      <Image source={require('./assets/icon.png')} />

      <Button
        color='orange'
        title='Click Me'
        onPress={() => alert('I am clicked')}
      ></Button>

      <Button
        color='green'
        title='Yes Or No'
        onPress={() =>
          Alert.alert('My title', 'My message', [
            { text: 'Yes', onPress: () => console.log('YES') },
            { text: 'No', onPress: () => console.log('NO') },
          ])
        }
      ></Button>

      <Button
        color='navy'
        title='Form Input'
        onPress={() =>
          Alert.prompt('MyTitle', 'MyMessage', (text) => console.log(text))
        }
      ></Button>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

//reference styles on line 13
//,create will validate the content
const styles = StyleSheet.create({
  container: {
    //flexible grow to fit the screen in width and height to fill the free space
    flex: 1,
    //backgroundColor
    backgroundColor: 'dodgerblue',
    //alignItems & justify Content put the text in the center of the screen
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

//View
{
  /* <View style={{ width: 200, height: 70, backgroundColor: red }}></View>; */
}
