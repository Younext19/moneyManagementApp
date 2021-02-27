import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {SAVESIGNUP} from './Reducers/DataReducer';
import {launchCamera} from 'react-native-image-picker';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function intro() {
  const dispatch = useDispatch();

  const [DateOfBirth, setDateOfBirth] = useState(new Date());
  const [EditBirthDate, setEditBirthDate] = useState(false);
  console.log(DateOfBirth);
  const [maximumDate, setmaximumDate] = useState(new Date());
  const [NameError, setNameError] = useState(false);
  const [FullName, setFullName] = useState('');
  const [avatarImage, setavatarImage] = useState('');
  const navigations = useNavigation();
  const Darkest = Colors.DarkestColor;
  const Darker = Colors.DarkerColor;
  const Green = Colors.GreenColor;
  const White = Colors.WhiteColor;
  function uploadImage() {
    launchCamera(
      {
        title: 'my pic app',
        takePhotoButtonTitle: 'Take photo with your camera',
        chooseFromLibraryButtonTitle: 'Choose photo from library',
      },
      (response) => {
        if (response.error) {
          alert(response.error);
        } else {
          setavatarImage({
            uri: response,
            uploaded: true,
          });
        }
      },
    );
  }
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: Darker,
        flex: 1,
        padding: 50,
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: Darkest,
          height: '55%',
          width: '110%',
          position: 'absolute',
          borderRadius: 450 / 2,
          top: -170,
          right: -100,
        }}></View>
      <TouchableOpacity
        onPress={() => {
          uploadImage();
        }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            alignSelf: 'center',
            backgroundColor: '#6f9eaf',
          }}>
          {avatarImage.uri ? (
            <View>
              <Image
                source={avatarImage.uri}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  alignSelf: 'center',
                }}
              />
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Assets/bottomNavBarIcons/profile.png')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  padding: 4,
                  fontWeight: 'bold',
                }}>
                Upload Image
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <Text style={{color: 'white', fontSize: 17}}>Nom et Prénom :</Text>
        <TextInput
          style={{
            width: '100%',
            height: 50,
            borderColor: White,
            borderBottomWidth: 1,
            color: 'white',
          }}
          placeholderTextColor={'grey'}
          placeholder={'HADDAM Younes'}
          onChangeText={(value) => setFullName(value)}
        />
        {NameError ? (
          <View>
            <Text style={{fontSize: 16, color: 'red'}}>
              Please Enter Your Name !
            </Text>
          </View>
        ) : (
          <View />
        )}
      </View>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          marginTop: 10,
        }}>
        <Text style={{color: 'white', fontSize: 17}}>Date De Naissance</Text>
        <View style={{alignItems: 'center', width: '100%', marginTop: 5}}>
          {EditBirthDate ? (
            <View style={{width: '100%', flexDirection: 'row'}}>
              <DatePicker
                style={{height: 100, width: 250}}
                date={DateOfBirth}
                onDateChange={setDateOfBirth}
                mode="date"
                textColor="white"
                fadeToColor="gray"
                maximumDate={maximumDate}
              />
              <TouchableOpacity
                style={{justifyContent: 'center', marginLeft: 15}}
                onPress={() => {
                  setEditBirthDate(false);
                }}>
                <FontAwesome name="check-square" size={35} color={'green'} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{width: '100%'}}>
              <TouchableOpacity
                onPress={() => setEditBirthDate(true)}
                style={{borderBottomWidth: 1, borderColor: White}}>
                <View>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 17,
                    }}>
                    {moment(DateOfBirth).format('DD MMMM YYYY')}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{
            width: 300,
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: Green,
          }}
          onPress={() => {
            if (FullName === '') {
              setNameError(true);
            } else {
              const Data = {
                BirthDate: DateOfBirth,
                fullName: FullName,
                ImgUser: avatarImage,
              };

              dispatch({
                type: SAVESIGNUP,
                signupData: Data,
              });
              navigations.push('Main');
            }
          }}>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Enregistrer
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
