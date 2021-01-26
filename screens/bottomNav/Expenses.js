import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function expenses() {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 60, backgroundColor: 'red'}}>
        <View
          style={{
            height: 40,
            margin: 15,
            backgroundColor: 'green',
            borderRadius: 7,
          }}></View>
      </View>
    </View>
  );
}
