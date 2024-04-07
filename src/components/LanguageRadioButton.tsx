// Native import 
import React, { useContext } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';

// Style import 
import { languageRadioButtonStyles } from './../styles/languageRadioButtonStyles';
import { VerticalSpacer } from './VerticalSpacer';

// Component import
import Text from './../../src/components/CustomText'
import { Theme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

// Define the props interface for the RadioButton component
interface IRadioButtonProps {
    options: string[];
    handleOptionSelect: (option: string) => void;
    selectedOption: string | null;
}

const LanguageRadioButton = (props: IRadioButtonProps) => {
    
    const { theme } = useContext(ThemeContext);
    const activeColors = Theme[theme.mode];

    // Render each option as a TouchableOpacity
    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity onPress={() => props.handleOptionSelect(item)} style={[languageRadioButtonStyles.radioButton, {  borderColor: activeColors.tint}]}>
            <Text style={[languageRadioButtonStyles.languageTitle, { color: activeColors.tint }]}>{item}</Text>
            <View style={[languageRadioButtonStyles.radioCircle, { borderColor: activeColors.tint }]}>
                <View style={[languageRadioButtonStyles.radioInnerCircle,
                {
                    backgroundColor: props.selectedOption === item ? activeColors.$blueColor : activeColors.primary
                }
                ]}
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                scrollEnabled={false}
                data={props.options}
                ItemSeparatorComponent={() => <VerticalSpacer />}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    );
};

export { LanguageRadioButton };