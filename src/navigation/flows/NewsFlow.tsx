// Native import
import React, { useContext } from 'react';

// Navigation import
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Config import
import * as screenConstants from '../../constants/ScreenConstants';

// Screen import
import useTranslations from '../../hooks/useTranslations';
import { Theme } from '../../config/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { NewsStackScreen, NewsDetailsStackScreen } from '../screens/TabScreens';

const Stack = createNativeStackNavigator();

const NewsFlow = () => {
  const [translate] = useTranslations();
  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];
  
  return (
    <Stack.Navigator
      initialRouteName={screenConstants.SETTINGS_SCREEN}
      screenOptions={() => ({})}>
      {NewsStackScreen(translate,activeColors)}
      {NewsDetailsStackScreen(translate,activeColors)}
    </Stack.Navigator>
  );
};

export default NewsFlow;
