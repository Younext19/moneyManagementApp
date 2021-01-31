import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function expenses() {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 130}}>
        <View
          style={{
            height: 100,
            margin: 15,
            marginTop: 40,
            borderRadius: 7,

            paddingLeft: 5,
          }}>
          <View
            style={{
              borderRadius: 7,
              margin: 5,
              flex: 1,
              alignItems: 'center',
              padding: 10,
              borderWidth: 2,
              backgroundColor: 'purple',
              flexDirection: 'row',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            }}>
            <View
              style={{
                height: 60,
                width: 60,
              }}>
              <Image
                source={require('../../Assets/images/ilies.jpg')}
                style={{
                  position: 'absolute',
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
              />
            </View>
            <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 20}}>
              Ilies
            </Text>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                10000 DZD
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'green', flex: 1, margin: 15}}>
        <View
          style={{
            height: 50,
            backgroundColor: 'grey',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{width: '50%', flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
              }}>
              <Text>Expenses</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '50%', flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
              }}>
              <Text>Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
