// Native import
import React, { useEffect, useState } from 'react';
import { Linking, LogBox, Platform, StatusBar } from 'react-native';

// Navigation import
import TabStack from './src/navigation/stacks/TabStack';
import { NavigationContainer } from '@react-navigation/native';

// Provider import
import { Provider as NewsProvider } from './src/context/newsContext';
import { store, persistor } from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Config import
import * as constants from './src/constants';

// Library import
import SplashScreen from 'react-native-splash-screen';
import { Mode, ThemeContext } from './src/context/ThemeContext';
import { Storage } from './src/services/storage';
import { Theme } from './src/config/theme';

const App = () => {

  const linking = {
    prefixes: ['newsapp://', 'https://newsapp.ae'],
    config: {
      screens: {

      }
    },
    async getInitialURL() {

      let initialUrl: any = await Linking.getInitialURL();

      if (!initialUrl) { return }

      setTimeout(() => {
        let urlData: any = getURLComponentAndParameter(initialUrl);

      }, 500);

      return initialUrl;
    },
  };

  // Get the required URL components
  const getURLComponentAndParameter = (initialUrl: string) => {
    return [];
  }

  const [theme, setTheme] = useState<{ mode: Mode }>({ mode: "dark" });
  const activeColors = Theme[theme.mode];

  const updateTheme = (newTheme: { mode: Mode } | undefined) => {
    let mode: Mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode };
    }
    setTheme(newTheme);
    Storage.storeData('theme', newTheme);
  }

  const fetchStoredTheme = async () => {
    try {
      const themeData = await Storage.getData('theme');
      if (themeData) {
        updateTheme(themeData);
      }
    } catch (e) {

    } finally {
      SplashScreen?.hide && SplashScreen.hide();
    }
  }

  useEffect(() => {
    fetchStoredTheme();
  }, []);

  StatusBar.setBarStyle(
    theme.mode === "dark" ? 'light-content' : 'dark-content',
    true,
  );
  if (Platform.OS === constants.PLATFORM.ANDROID) {
    StatusBar.setBackgroundColor(activeColors.primary);
  }

  LogBox.ignoreAllLogs(true);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <NewsProvider>
              <NavigationContainer>
                <ThemeContext.Provider value={{ theme, updateTheme }}>
                  <TabStack />
                </ThemeContext.Provider>
              </NavigationContainer>
            </NewsProvider>
          </Provider>
        </PersistGate>
      </ApplicationProvider>
    </>
  );
};

export default App;