// Native import 
import React, { useState, useEffect, useContext } from "react";
import { I18nManager, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

// Style import 
import { changeLanguageScreenStyles } from "./../styles/changeLanguageScreenstyles";

// Config import 
import i18next from "./../locales/i18next";
import * as constants from './../constants';

// Component import
import { LanguageRadioButton } from "./../components/LanguageRadioButton";

// Libarary import 
import RNRestart from "react-native-restart";
import { Theme } from "../config/theme";
import { ThemeContext } from "../context/ThemeContext";

// Define the prop types for the About Us Screen
interface ILanguagesSettingsScreen { }

const ChangeLanguageScreen = (props: ILanguagesSettingsScreen) => {

    const { theme } = useContext(ThemeContext);
    const activeColors = Theme[theme.mode];

    const getLabelFromLanguageCode = (languageCode: string) => {
        // Map the language code to the corresponding label
        switch (languageCode) {
            case constants.LANGUAGE.AR:
                return "Arabic";
            case constants.LANGUAGE.EN:
                return "English";
            // Add more cases for other languages if needed
            default:
                return "English";
        }
    };

    // Set to the current language label
    const [selectedOption, setSelectedOption] = useState<string | null>(getLabelFromLanguageCode(i18next.language));
    const [languageOptions, setLanguageOptions] = useState<string[]>([]);

    useEffect(() => {
        // Define your language options with dynamic labels here
        const dynamicLanguageOptions = [
            "English",
            "Arabic",
        ];

        setLanguageOptions(dynamicLanguageOptions);
    }, []);

    const handleOptionSelect = (option: string) => {
        if (selectedOption !== option) {
            // Map the label back to the language code
            const languageCode = getLanguageCodeFromLabel(option);

            i18next.changeLanguage(languageCode).then(() => {
                setSelectedOption(option);
                I18nManager.forceRTL(languageCode === constants.LANGUAGE.AR);
                setTimeout(() => {
                    // Restart the app to apply language changes
                    RNRestart.Restart();
                }, 500);
            }).catch((error) => {
                console.error("Error changing language", error.message);
            });
        }
    };

    const getLanguageCodeFromLabel = (label: string) => {
        // Map the label to the corresponding language code
        switch (label) {
            case "Arabic":
                return constants.LANGUAGE.AR;
            case "English":
                return constants.LANGUAGE.EN;
            // Add more cases for other languages if needed
            default:
                return constants.LANGUAGE.EN;
        }
    };

    return (
        <SafeAreaView style={[changeLanguageScreenStyles.root, {   backgroundColor: activeColors.primary}]}>
            <StatusBar
                animated={true}
                backgroundColor={activeColors.secondary}
            />
            <ScrollView style={changeLanguageScreenStyles.scrollViewStyles}>
                <View style={{ marginVertical: 40 }} />
                <LanguageRadioButton
                    selectedOption={selectedOption}
                    options={languageOptions}
                    handleOptionSelect={handleOptionSelect}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ChangeLanguageScreen;