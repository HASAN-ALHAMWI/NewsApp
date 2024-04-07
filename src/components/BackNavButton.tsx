// Import native deps/modules
import React, { useContext, useEffect } from 'react';

// Import native widgets
import { TouchableOpacity, Image, Text } from 'react-native';

// Import config/constants/theme
import * as constants from '../constants';
import * as ImageConstants from '../constants/ImageConstants';

// Import custom hooks
import useNavigation from '../hooks/useNavigation';
import useTranslations from '../hooks/useTranslations';

// Import styles
import { backNavStyles as styles } from './../styles/backNavStyles';
import { HorizontalSpacer } from './HorizontalSpacer';
import useAsyncStorage from '../utils/storage';
import { Theme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

interface IBackButtonProps { }

const BackNavButton = (props: IBackButtonProps) => {
  const [translate, language] = useTranslations();

  const { theme } = useContext(ThemeContext);
  const activeColors = Theme[theme.mode];

  // MARK: Navigation Actions
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={goBack}>
      <Image
        style={[
          styles.backIcon,
          { tintColor: activeColors.tint },
          language === constants.LANGUAGE.EN
            ? styles.backIconEn
            : styles.backIconAR,
        ]}
        source={ImageConstants.ICON_BACK_NAV}
      />
      <HorizontalSpacer />
    </TouchableOpacity>
  );
};
export default BackNavButton;
