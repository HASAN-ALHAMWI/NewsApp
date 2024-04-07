// Native import
import {Platform, StyleSheet} from 'react-native';

// Config import
import * as constants from '../constants';

export const backNavStyles = StyleSheet.create({
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginEnd: Platform.OS === 'android' ? 15 : 0,
  },
  backIconEn: {
    transform: [{rotate: '180deg'}],
  },
  backIconAR: {
    transform: [
      {rotate: Platform.OS === constants.PLATFORM.IOS ? '360deg' : '180deg'},
    ],
  },
});
