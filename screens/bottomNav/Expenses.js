import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import images from '../images';
import {useState} from 'react';

const {fitness, market, shopping} = images;

const TotalMoney = [
  {
    id: '1',
    TotalWaste: '34000',
    logo: fitness,
    title: 'Fitness',
  },
  {
    id: '2',
    TotalWaste: '25000',
    logo: market,
    title: 'Market',
  },
  {
    id: '3',
    TotalWaste: '45300',
    logo: shopping,
    title: 'Shopping',
  },
];
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fitness',
    imgName: fitness,
    comment: '1 mois Hdid',
    date: '25/03/2014',
    money: 1800,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Market',
    imgName: market,
    comment: '2 Khobz',
    date: '25/03/2014',
    money: 20,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Shopping',
    imgName: shopping,
    comment: 'asics',
    date: '25/03/2014',
    money: 8500,
  },
  {
    id: '58694a0f-3d1-471f-bd96-145571e29d72',
    title: 'Shopping',
    imgName: shopping,
    comment: 'asics',
    date: '25/03/2014',
    money: 8500,
  },
  {
    id: '586940f-3da1-471f-bd96-145571e29d72',
    title: 'Shopping',
    imgName: shopping,
    comment: 'asics',
    date: '25/03/2014',
    money: 8500,
  },
];

export default function expenses() {
  const [filterBy, setfilterBy] = useState('Expenses');
  const HorizontList = ({item}) => {
    return (
      <View
        style={{
          width: 170,
          height: 100,
          margin: 10,
          borderRadius: 10,
          padding: 10,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 8,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>

        <Text style={{fontSize: 16, fontStyle: 'italic'}}>
          {item.TotalWaste}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Image
            source={item.logo}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderRadius: 7,
          marginVertical: 6,
          marginHorizontal: 12,
          height: 70,
          padding: 8,
          alignItems: 'center',
          backgroundColor: '#fff',
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 4,
        }}>
        <Image
          source={item.imgName}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <View style={{marginLeft: 5}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.comment}</Text>
          <Text style={{fontSize: 16, fontStyle: 'italic'}}>{item.date}</Text>
        </View>
        <View
          style={{justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1}}>
          <Text style={{fontSize: 18}}>{item.money} DZD</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ece2e1'}}>
      <View style={{height: 160}}>
        <View
          style={{
            height: 130,
            margin: 15,
            marginTop: 40,
            borderRadius: 7,
            paddingLeft: 5,
          }}>
          <View
            style={{
              borderRadius: 7,
              flex: 1,
              alignItems: 'center',
              padding: 10,
              flexDirection: 'row',
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.46,
              shadowRadius: 11.14,

              elevation: 17,
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                <Text
                  style={{marginLeft: 10, fontWeight: 'bold', fontSize: 20}}>
                  Ilies
                </Text>
              </View>
              <Text style={{fontSize: 20, fontStyle: 'italic', marginTop: 10}}>
                100000 DZD
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flex: 1,
              }}>
              <Text>ANIMATION</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          margin: 15,
          borderRadius: 12,
        }}>
        <View style={{width: '100%', height: 150}}>
          <Text style={{fontSize: 20, marginLeft: 15, fontWeight: 'bold'}}>
            Total Waste
          </Text>
          <FlatList
            data={TotalMoney}
            renderItem={HorizontList}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={{fontSize: 20, marginLeft: 15, fontWeight: 'bold'}}>
          Track Your Expenses
        </Text>
        <View style={{marginVertical: 2}} />
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            borderRadius: 12,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              width: '50%',
              flex: 1,
              backgroundColor: 'white',
              borderRightColor: 'grey',
              borderTopLeftRadius: 10,
              borderWidth: 0.5,
              borderColor: 'black',
              backgroundColor: filterBy === 'Expenses' ? '#133b5c' : 'white',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
              }}
              onPress={() => {
                setfilterBy('Expenses');
              }}>
              <Text
                style={{
                  color: filterBy === 'Expenses' ? 'white' : 'black',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Expenses
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '50%',
              flex: 1,
              backgroundColor: 'white',
              borderTopRightRadius: 10,
              backgroundColor: filterBy === 'Income' ? '#133b5c' : 'white',
              borderWidth: 0.5,
              borderColor: 'black',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
              }}
              onPress={() => {
                setfilterBy('Income');
              }}>
              <Text
                style={{
                  color: filterBy === 'Income' ? 'white' : 'black',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Income
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                padding: 6,
                borderColor: 'black',
                backgroundColor: '#FFF',
                height: 40,
                borderRadius: 8,
                width: 300,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,

                elevation: 4,
              }}>
              <TextInput style={{padding: 3}} placeholder={'Search here'} />
              <View style={{alignItems: 'flex-end', flex: 1}}>
                <Fontisto name={'search'} size={20} color={'grey'} />
              </View>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#1e5f74',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 18,
              }}>
              <Text style={{fontSize: 30, color: 'white'}}>+</Text>
            </TouchableOpacity>
          </View>
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
