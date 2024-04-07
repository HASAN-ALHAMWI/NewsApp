
// Import native modules
import React, { useContext } from 'react';
import MText from './CustomText';
import useTranslations from '../hooks/useTranslations';
import * as TextConstants from '../constants/TextConstants';
import { View } from 'react-native';
import { fontSizes } from '../styles';
import { Theme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    emptyListMessage?: string;
};

const EmptyListView: React.FC<Props> = (props: Props) => {

    const [translate, language] = useTranslations();
    const { theme } = useContext(ThemeContext);
    const activeColors = Theme[theme.mode];

    return (
        <View style={{alignItems:"center",justifyContent:"space-between"}}>
            <MText style={{fontSize:fontSizes.small,color:activeColors.tint,textAlign:"center"}}>{translate(props?.emptyListMessage || TextConstants.DATA_NOT_AVAILABLE)}</MText>
        </View>
    );
}

export { EmptyListView };
