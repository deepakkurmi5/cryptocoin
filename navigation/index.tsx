import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import Tabs from './tabs';
import CryptoDetails from '../screens/crypto-details';
import Transaction from '../screens/transaction';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Tabs} />
      <Stack.Screen name="CryptoDetails" component={CryptoDetails} />
      <Stack.Screen name="Transation" component={Transaction} />
    </Stack.Navigator>
  );
};
