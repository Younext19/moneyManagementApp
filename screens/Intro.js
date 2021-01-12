import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import moment from 'moment';

export default function intro() {
  const [DateOfBirth, setDateOfBirth] = useState(new Date());
  const [EditBirthDate, setEditBirthDate] = useState(false);
  console.log(DateOfBirth);
  const [maximumDate, setmaximumDate] = useState(new Date());
  console.log(maximumDate);
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Full Name</Text>
        <TextInput
          style={{width: 300, height: 40, borderColor: 'red', borderWidth: 2}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>DateOfBirth</Text>

        {EditBirthDate ? (
          <View>
            <DatePicker
              style={{height: 100}}
              date={DateOfBirth}
              onDateChange={setDateOfBirth}
              mode="date"
              textColor="white"
              fadeToColor="gray"
              maximumDate={maximumDate}
            />
            <TouchableOpacity
              onPress={() => {
                setEditBirthDate(false);
              }}>
              <Text style={{color: 'white'}}>Edit</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity onPress={() => setEditBirthDate(true)}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  {moment(DateOfBirth).format('DD MMMM YYYY')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Monthly Incomes</Text>
        <TextInput
          style={{borderColor: 'red', borderWidth: 2, width: 200, height: 40}}
        />
      </View>
    </View>
  );
}
