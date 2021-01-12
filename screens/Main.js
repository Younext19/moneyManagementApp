import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Expenses from './bottomNav/Expenses';
import Profile from './bottomNav/Profile';

const Tab = createBottomTabNavigator();

export default function main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../Assets/bottomNavBarIcons/expenses.png')}
              tintColor="#111D5E"
              style={{width: 30, height: 30}}
            />
          ),
        }}
        name="Expenses"
        component={Expenses}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../Assets/bottomNavBarIcons/profile.png')}
              tintColor="#111D5E"
              style={{width: 30, height: 30}}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
