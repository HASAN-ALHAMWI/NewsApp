// Native import 
import React, { useContext, useEffect, useState } from "react";
import { View, ImageSourcePropType, Switch, Image, TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native';

// Component import 
import Text from './../components/CustomText';
import { HorizontalSpacer } from "./HorizontalSpacer";

// Styles import 
import { accountSettingsRowStyles } from "./../styles/accountSettingsRowStyles";

// Config import
import * as constants from './../constants';
import * as imageConstants from './../constants/ImageConstants';
import useTranslations from "../hooks/useTranslations";
import { Icon } from "@ui-kitten/components";
import { Theme } from "../config/theme";
import { ThemeContext } from "../context/ThemeContext";


// Define the prop types for the Settings Row Component
interface ISettingsRowProps {
  leftIcon: ((String | ImageSourcePropType) & string) | undefined,
  title?: string,
  rightIcon?: any,
  rightIconType: RightIconType,
  onPress: ((event: GestureResponderEvent) => void) | undefined
}

export enum RightIconType {
  SWITCHER = 'Switcher',
  CHEVRON = 'Chevron',
  NONE = 'None'
}

const SettingsRow = (props: ISettingsRowProps) => {

  const { theme, updateTheme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];

  const [translate, language] = useTranslations();
  const [isEnabled, setIsEnabled] = useState(theme.mode === "dark" );
  const toggleSwitch = () => {
    updateTheme(undefined);
    setIsEnabled(previousState => !previousState);
  };

  const renderRightIcon = () => {
    if (props.rightIconType === RightIconType.SWITCHER) {
      return (
        <Switch
          trackColor={{ false: '#767577', true: activeColors.$lightblueColor }}
          thumbColor={isEnabled ? activeColors.$blueColor : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      );
    }
    else if (props.rightIconType === RightIconType.CHEVRON) {
      return (
        <Image source={imageConstants.CHEVRON_ICON} style={[accountSettingsRowStyles.chevronIcon, { tintColor: activeColors.tint ,transform: language === constants.LANGUAGE.EN ? [{ rotate: '360deg' }] : [{ rotate: '180deg' }] }]} />
      );
    }
    else {
      return;
    }
  }

  return (
    <>
      {props?.leftIcon ?
        <TouchableOpacity style={accountSettingsRowStyles.rowContainer} onPress={props.onPress} disabled={props.rightIconType === RightIconType.SWITCHER}>
          <View style={accountSettingsRowStyles.titleContainer}>
            <Icon
              style={styles.icon}
              fill={activeColors.tint}
              name={props?.leftIcon}
            />
            <HorizontalSpacer />
            <Text style={{ paddingTop: 3, fontSize: 10 }}>{props?.title}</Text>
          </View>
          {renderRightIcon()}
        </TouchableOpacity>
        : null}
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
export { SettingsRow }