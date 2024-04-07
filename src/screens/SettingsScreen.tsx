// Native import
import React, { useContext } from 'react';
import { FlatList, Platform, SafeAreaView, View } from 'react-native';

// Config import
import * as screenConstants from '../constants/ScreenConstants';
import * as constants from '../constants';
import * as TextConstants from '../constants/TextConstants';

// Style import
import { accountScreenStyles } from './../styles/accountScreenStyles';

// Component import
import { VerticalSpacer } from '../components/VerticalSpacer';
import { RightIconType, SettingsRow } from '../components/SettingsRow';
import useNavigation from '../hooks/useNavigation';
import useTranslations from '../hooks/useTranslations';
import { Theme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

// Define the prop types for the Account screen
interface IAccountScreen { }

const SettingsScreen = (props: IAccountScreen) => {

  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];

  // MARK: Navigation Actions
  const { navigate, replace } = useNavigation();
  const [translate] = useTranslations();

  const settingsRowData = [
    {
      id: '1',
      title: translate(TextConstants.APP_LANGUAGE),
      leftIcon: 'globe-outline',
      rightIconType: RightIconType.CHEVRON,
      onPress: () => navigate(screenConstants.CHANGE_LANGUAGE_SCREEN),
    },
    {
      id: '2',
      title: translate(TextConstants.DARK_MODE),
      leftIcon: 'moon-outline',
      rightIconType: RightIconType.SWITCHER,
    },
  ];

  const renderItem = (item: any) => {
    return (
      <SettingsRow
        leftIcon={item.leftIcon}
        rightIconType={item.rightIconType}
        title={item.title}
        onPress={item.onPress}
      />
    );
  };

  const renderVerticalSpacer = () => {
    return <VerticalSpacer tripleSpace />;
  };

  const renderAccountSettingsRows = () => {
    return (
      <FlatList
        ItemSeparatorComponent={renderVerticalSpacer}
        data={settingsRowData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderScreenContent = () => {
    return (
      <View
        style={{ marginTop: Platform.OS === constants.PLATFORM.IOS ? 0 : 30 }}>
        <VerticalSpacer tripleSpace />
        {renderAccountSettingsRows()}
      </View>
    );
  };

  return (
    <SafeAreaView style={[accountScreenStyles.root, { backgroundColor: activeColors.primary }]}>
      {renderScreenContent()}
    </SafeAreaView>
  );
};

export default SettingsScreen;