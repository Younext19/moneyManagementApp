import React from 'react';
import {Text, View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function AddExpense() {
  return (
    <View style={{flex: 1, backgroundColor: '#ece2e1'}}>
      <View style={{margin: 30, flex: 1, borderWidth: 1, padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add A Bill</Text>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 150,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Category</Text>
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
                borderWidth: 1,
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
              <TextInput style={{padding: 3}} />
              <View style={{alignItems: 'flex-end', flex: 1}}>
                <MaterialIcons name={'category'} size={25} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
