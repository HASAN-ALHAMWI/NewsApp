import React from 'react';

// Config import
import * as ImageConstants from './../../constants/ImageConstants';
import * as TextConstants from './../../constants/TextConstants';
import * as ScreenConstants from './../../constants/ScreenConstants';

// Screens/Navigation import
import { screenOptions, Tab, Stack } from '.';
import NewsScreen from '../../screens/NewsScreen';

// Component import
import { tabBarIconView } from '../../components/tabBarIconView';
import SettingsScreen from '../../screens/SettingsScreen';
import ChangeLanguageScreen from '../../screens/ChangeLanguageScreen';
import SettingsFlow from '../flows/SettingsFlow';
import { fontSizes } from '../../styles';
import BackNavButton from '../../components/BackNavButton';
import NewsFlow from '../flows/NewsFlow';
import NewsDetailsScreen from '../../screens/NewsDetailsScreen';


export const NewsStackScreen = (translate: { (keyName: string): string }, theme: any) => {
  return (
    <Stack.Screen
      name={ScreenConstants.NEWS_SCREEN}
      component={NewsScreen}
      options={{
        ...screenOptions,
        headerTitle: translate(TextConstants.NEWS_TITLE),
        headerTitleStyle:{
          color: theme.tint,
          fontSize: fontSizes.xxxLarge,
        },
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.primary,
        },
      }}
    />
  );
};

export const NewsDetailsStackScreen = (translate: { (keyName: string): string }, theme: any) => {
  return (
    <Stack.Screen
      name={ScreenConstants.NEWS_DETAILS_SCREEN}
      component={NewsDetailsScreen}
      options={{
        ...screenOptions,
        headerTitle: translate(TextConstants.NEWS_DETAILS_TITLE),
        headerTitleStyle:{
          color: theme.tint,
          fontSize: fontSizes.xxxLarge,
        },
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerLeft: () => <BackNavButton />,
      }}
    />
  );
};

export const SettingsStackScreen = (translate: { (keyName: string): string }, theme: any) => {
  return (
    <Stack.Screen
      name={ScreenConstants.SETTINGS_SCREEN}
      component={SettingsScreen}
      options={{
        ...screenOptions,
        headerTitle: translate(TextConstants.SETTINGS_TITLE),
        headerTitleStyle:{
          color: theme.tint,
          fontSize: fontSizes.xxxLarge,
        },
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.primary,
        },
      }}
    />
  );
};

export const NewsStackFlow = (translate: { (keyName: string): string }, theme: any) => {
  return (
    <Tab.Screen
      name={ScreenConstants.NEWS_FLOW}
      component={NewsFlow}
      options={{
        ...screenOptions,
        tabBarIcon: ({ focused }) =>
          tabBarIconView(
            translate(TextConstants.NEWS_TITLE),
            focused,
            ImageConstants.NEWS_ICON,
          ),
      }}
    />
  );
};

export const SettingsStackFlow = (translate: { (keyName: string): string }, theme: any) => {
  return (
    <Tab.Screen
      name={ScreenConstants.SETTINGS_FLOW}
      component={SettingsFlow}
      options={{
        ...screenOptions,
        tabBarIcon: ({ focused }) =>
          tabBarIconView(
            translate(TextConstants.SETTINGS_TITLE),
            focused,
            ImageConstants.SETTINGS_ICON,
          ),
      }}
    />
  );
};

// Change Language Screen
export const ChangeLanguageStackScreen = (translate: {(keyName: string): string}, theme: any) => {
  return (
    <Stack.Screen
      name={ScreenConstants.CHANGE_LANGUAGE_SCREEN}
      component={ChangeLanguageScreen}
      options={{
        ...screenOptions,
        headerTitle: translate(TextConstants.CHANGE_LANGUAGE_TITLE),
        headerTitleStyle:{
          color: theme.tint,
          fontSize: fontSizes.xxxLarge,
        },
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerLeft: () => <BackNavButton />,
      }}
    />
  );
};