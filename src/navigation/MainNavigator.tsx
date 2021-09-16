import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { BookDetailsScreen, ExperimentalScreen, CharacterDetailsScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
    <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
