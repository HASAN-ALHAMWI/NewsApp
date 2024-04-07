// Native import
import React, { useContext } from 'react';

// Navigation import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Config import
import * as ScreenConstants from './../../constants/ScreenConstants';
import TabStack from '../stacks/TabStack';

export const Stack = createNativeStackNavigator();
export const Tab = createBottomTabNavigator();

// Screen options
export let screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

// Stacks
export const TabStackScreens = () => {
  return (
    <Stack.Screen
      name={ScreenConstants.TAB_STACK}
      component={TabStack}
      options={screenOptions}
    />
  );
};
