import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './screens/Main';
import Intro from './screens/Intro';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import store, {persistedStore} from './screens/Reducers/store';

const Stack = createStackNavigator();
const App = () => {
  // TO CHANGE INTRO TO BOTTOM NAV BAR
  return (
    <Provider store={store}>

      
      <PersistGate persistor={persistedStore} loading={null}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
