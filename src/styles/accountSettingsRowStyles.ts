// Native import
import {StyleSheet} from 'react-native';
import {RValue} from '../utils/Device';

export const accountSettingsRowStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  chevronIcon: {
    height: RValue(18),
    width: RValue(18),
  },
});
