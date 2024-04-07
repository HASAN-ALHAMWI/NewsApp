// Native import
import { Platform, StyleSheet } from "react-native";

// Utils import
import { FontValue, hasNotch } from "../utils/Device";

// Config import
import * as constants from './../constants'

export const extraNotchHeight = 50;

export const headerViewPaddingWithNavBar  = hasNotch() ? 50 + extraNotchHeight : Platform.OS === constants.PLATFORM.IOS ? 70 : 60

export const appStyles = StyleSheet.create({});

export const fontSizes = {
    xxSmall: FontValue(5),
    xSmall: FontValue(7),
    small: FontValue(8),
    medium: FontValue(9),
    large: FontValue(10),
    xLarge: FontValue(12),
    xxLarge: FontValue(14),
    xxxLarge: FontValue(17),
    xxxxLarge:FontValue(19),
    xxxxxLarge:FontValue(21),
    xxxxxxLarge: FontValue(35),
};