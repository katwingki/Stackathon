import React from 'react';
import { View } from 'react-native';

export default function flexBox() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1, //this will not show as a parent
      }}
    >
      <View
        style={{
          backgroundColor: 'dogerblue',
          flex: 2, //grow to 50%
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          flex: 1, //grow to 1/4 available screen
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1, //grow to 1/4 available screen
        }}
      />
    </View>
  );
}

/*******Flex Direction */
//Layout aligned vertically by defauly
//flexDirection:"row" or "row-reverse" or "column-reverse"  //CONTROL+SPACE woule give you the option
export default function flexBox() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1, //this will not show as a parent
      }}
    >
      <View
        style={{
          backgroundColor: 'dogerblue',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

//Align Items
<View
  style={{
    backgroundColor: 'tomato',
    justifyContent: 'center', //depend on flexDirection,
    alignItems: 'baseline', //align to the second axis//flex-end, flex-start, strech
  }}
/>;
