// Config import
import * as ScreenConstants from '../../constants/ScreenConstants';

// Screen import
import {screenOptions, Tab} from '../screens';

// Hooks import
import useTranslations from '../../hooks/useTranslations';

// Screen import
import {
  SettingsStackFlow,
  NewsStackFlow,
} from '../screens/TabScreens';

// Style import
import {bottomBarHeight} from '../../styles/bottomNavigationBarStyles';
import { Theme } from '../../config/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const TabStack = () => {
  const [translate] = useTranslations();
  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];

  return (
    <Tab.Navigator
      initialRouteName={ScreenConstants.NEWS_SCREEN}
      screenOptions={{
        ...screenOptions,
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: activeColors.secondary,
          height: bottomBarHeight,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      {NewsStackFlow(translate,activeColors)}
      {SettingsStackFlow(translate,activeColors)} 
    </Tab.Navigator>
  );
};

export default TabStack;
