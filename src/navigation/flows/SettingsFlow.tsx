// Native import
import React, { useContext } from 'react';

// Navigation import
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Config import
import * as screenConstants from '../../constants/ScreenConstants';

// Screen import
import useTranslations from '../../hooks/useTranslations';
import {
  SettingsStackScreen,
  ChangeLanguageStackScreen,
} from '../screens/TabScreens';
import { Theme } from '../../config/theme';
import { ThemeContext } from '../../context/ThemeContext';

const Stack = createNativeStackNavigator();

const SettingsFlow = () => {
  const [translate] = useTranslations();
  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];
  
  return (
    <Stack.Navigator
      initialRouteName={screenConstants.SETTINGS_SCREEN}
      screenOptions={() => ({})}>
      {SettingsStackScreen(translate,activeColors)}
      {ChangeLanguageStackScreen(translate,activeColors)}
    </Stack.Navigator>
  );
};

export default SettingsFlow;
