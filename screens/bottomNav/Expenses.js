import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function expenses() {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'grey',
          borderRadius: 7,
          marginVertical: 8,
          marginHorizontal: 8,
          justifyContent: 'center',
          height: 60,
          padding: 8,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
      </View>
    );
  };
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
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          margin: 15,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,

          elevation: 19,
        }}>
        <View
          style={{
            height: 50,
            backgroundColor: 'grey',
            width: '100%',
            flexDirection: 'row',
            borderRadius: 12,
          }}>
          <View style={{width: '50%', flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                borderTopLeftRadius: 10,
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
                borderTopRightRadius: 8,
                height: '100%',
                justifyContent: 'center',
              }}>
              <Text>Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'blue', flex: 1}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}
