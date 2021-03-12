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
        backgroundColor: '#ece2e1',
        flex: 1,
        padding: 50,
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#564654',
          height: '55%',
          width: '110%',
          position: 'absolute',
          borderRadius: 450 / 2,
          top: 600,
          right: -120,
        }}></View>
      <View
        style={{
          backgroundColor: '#564654',
          height: '55%',
          width: '110%',
          position: 'absolute',
          borderRadius: 450 / 2,
          top: -170,
          right: -100,
        }}></View>
      <View
        style={{
          backgroundColor: '#564654',
          height: '55%',
          width: '110%',
          position: 'absolute',
          borderRadius: 450 / 2,
          top: 170,
          right: 370,
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
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            color: 'black',
          }}>
          Nom et Prénom :
        </Text>
        <TextInput
          style={{
            width: '100%',
            height: 50,
            borderRadius: 4,
            padding: 10,
            color: 'black',
            paddingBottom: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 6,
            elevation: 4,
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
        <Text style={{color: 'black', fontSize: 17}}>Date De Naissance : </Text>
        <View style={{alignItems: 'center', width: '100%', marginTop: 5}}>
          {EditBirthDate ? (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <DatePicker
                style={{height: 100, width: 250}}
                date={DateOfBirth}
                onDateChange={setDateOfBirth}
                mode="date"
                textColor="black"
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
            <View
              style={{
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => setEditBirthDate(true)}
                style={{
                  width: '100%',
                  height: 50,
                  borderRadius: 4,
                  padding: 10,
                  color: 'black',
                  paddingBottom: 5,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,
                  elevation: 4,
                }}>
                <View>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 16,
                      marginTop: 5,
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
            width: 310,
            height: 40,
            justifyContent: 'center',
            borderRadius: 2,
            backgroundColor: '#6f9eaf',
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
