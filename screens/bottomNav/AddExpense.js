import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import images from '../images';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {ADD_EXPENSES, ADD_INCOME} from '../Reducers/DataReducer';

const {fitness, market, shopping} = images;

export default function AddExpense() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedCateg, setselectedCateg] = useState('none');
  const [selectedType, setselectedType] = useState('Expenses');
  const [Title, setTitle] = useState('');
  const [Budget, setBudget] = useState('');
  const Categories = [
    {id: 7, categ: 'Mina', imgName: fitness},
    {id: 6, categ: 'fruity', imgName: market},
    {id: 5, categ: 'Rouge', imgName: fitness},
    {id: 4, categ: 'Dell', imgName: shopping},
    {id: 3, categ: 'NY', imgName: market},
    {id: 2, categ: 'S.Jobs', imgName: market},
    {id: 1, categ: 'Beer', imgName: market},
  ];
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: 'grey',
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor:
              selectedCateg.categ === item.categ ? '#78e08f' : 'white',
          }}
          onPress={() => {
            setselectedCateg({imgName: item.imgName, categ: item.categ});
          }}>
          <Text style={{fontSize: 20}}>{item.categ}</Text>
          <Image
            source={item.imgName}
            style={{
              width: 35,
              height: 35,
              margin: 3,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ece2e1',
        margin: 10,
        marginLeft: 15,
        marginRight: 15,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          borderRadius: 10,
          elevation: 10,
          flex: 1,
          padding: 30,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Type </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              padding: 10,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
              backgroundColor:
                selectedType === 'Expenses' ? '#78e08f' : 'white',
            }}
            onPress={() => {
              setselectedType('Expenses');
            }}>
            <Text style={{fontSize: 17}}>Expenses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              padding: 10,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              borderRadius: 6,
              backgroundColor: selectedType === 'Income' ? '#78e08f' : 'white',
            }}
            onPress={() => {
              setselectedType('Income');
            }}>
            <Text style={{fontSize: 17}}>Income</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Title</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#564654',
            borderRadius: 8,
            height: 60,
            padding: 10,
          }}
          placeholder={'Achetez 2 Pain'}
          onChangeText={(v) => setTitle(v)}
        />

        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 10}}>
          Budget
        </Text>
        <TextInput
          keyboardType={'decimal-pad'}
          style={{
            borderWidth: 1,
            borderColor: '#564654',
            borderRadius: 8,
            height: 60,
            padding: 10,
          }}
          placeholder={'4500'}
          onChangeText={(v) => setBudget(v)}
        />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Category</Text>
        <View
          style={{
            marginTop: 10,
            height: 250,
          }}>
          <FlatList
            data={Categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            padding: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#e55039',
              width: 100,
              height: 40,
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>Annuler</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#78e08f',
              width: 100,
              height: 40,
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                console.log('hna ajouter some data f reducer');
                function uuidv4() {
                  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                    /[xy]/g,
                    function (c) {
                      var r = (Math.random() * 16) | 0,
                        v = c == 'x' ? r : (r & 0x3) | 0x8;
                      return v.toString(16);
                    },
                  );
                }
                const Data = {
                  id: uuidv4(),
                  Title: Title,
                  Budget: Budget,
                  Category: selectedCateg,
                  Date: moment().format('lll'),
                  Type: selectedType,
                };
                console.log(Data);
                if (Data.Type === 'Expenses') {
                  //DISPATCH TO EXPENSES
                  dispatch({
                    type: ADD_EXPENSES,
                    ExpensesData: Data,
                  });
                } else {
                  // DISPATCH TO INCOME
                  dispatch({
                    type: ADD_INCOME,
                    IncomeData: Data,
                  });
                }
                // navigation.goBack();
              }}>
              <Text style={{fontSize: 20, color: 'white'}}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
