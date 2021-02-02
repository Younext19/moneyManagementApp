import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import images from '../images';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
const {fitness, market, shopping} = images;

export default function AddExpense() {
  const [selectedCateg, setselectedCateg] = useState('none');
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 5,
          borderWidth: 1,
          margin: 6,
          borderRadius: 8,
          backgroundColor: selectedCateg === item.categ ? '#78e08f' : 'white',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedCateg(item.categ);
          }}>
          <Text style={{fontSize: 20}}>
            {item.categ.length > 8
              ? item.categ.substring(0, 5) + '...'
              : item.categ}
          </Text>
          {item.imgName !== null ? (
            <Image
              source={item.imgName}
              style={{
                width: 25,
                height: 25,
                margin: 3,
              }}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const Categories = [
    {categ: 'Mina', imgName: fitness},
    {categ: 'fruity', imgName: market},
    {categ: 'Rouge', imgName: fitness},
    {categ: 'Dell', imgName: shopping},
    {categ: 'NY', imgName: market},
    {categ: 'S.Jobs', imgName: market},
    {categ: 'Beer', imgName: market},
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#ece2e1'}}>
      <View style={{margin: 20, flex: 1, padding: 10}}>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            width: '100%',
            height: 600,
            borderRadius: 6,
            padding: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}>
          <Text style={{fontSize: 20, fontStyle: 'italic'}}>Subject</Text>
          <View style={{padding: 10}}>
            <TextInput
              style={{borderWidth: 1, borderRadius: 7, padding: 7}}
              placeholder={'Achetez 2 pain'}
            />
          </View>
          <Text style={{fontSize: 20, fontStyle: 'italic'}}>Description</Text>
          <View style={{padding: 10}}>
            <TextInput
              style={{borderWidth: 1, borderRadius: 7, padding: 7}}
              placeholder={'350'}
            />
          </View>
          <Text style={{fontSize: 20, fontStyle: 'italic'}}>Prix</Text>
          <View style={{padding: 10}}>
            <TextInput
              style={{borderWidth: 1, borderRadius: 7, padding: 7}}
              placeholder={'350'}
            />
          </View>

          <Text style={{fontSize: 20, fontStyle: 'italic'}}>Category </Text>
          <FlatList
            data={Categories}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={(item) => item.categ}
          />
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'flex-start'}}>
              <TouchableOpacity
                style={{borderWidth: 1, backgroundColor: 'red'}}>
                <Text>annuler</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                style={{borderWidth: 1, backgroundColor: 'green'}}>
                <Text>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
