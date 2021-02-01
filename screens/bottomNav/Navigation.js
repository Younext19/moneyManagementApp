import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddExpense from './AddExpense';
import profileDetails from './profileDetails';
import expenses from './Expenses';

const Stack = createStackNavigator();

export default function navigation() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Expenses" component={expenses} />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      <Stack.Screen name="profileDetails" component={profileDetails} />
    </Stack.Navigator>
  );
}
