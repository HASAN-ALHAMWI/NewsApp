// Native import 
import React, { ReactNode, useContext } from 'react';
import { Text, TextStyle } from 'react-native';

// Config import 
import { FontValue } from '../utils/Device';
import useAsyncStorage from '../utils/storage';
import { Theme } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

// Define the prop types for the MText Component
interface ICustomTextProps {
    numberOfLines?: number;
    isFontSizeConfigurable?: boolean;
    style?: TextStyle | TextStyle[];
    children: ReactNode;
    // fontType?: fontTypes,
}

const DEFAULT_FONT_SIZE = FontValue(8);

const CustomText = (props: ICustomTextProps) => {

    const fontSize = 5;
    let currentFontSize = DEFAULT_FONT_SIZE;
    let numberOfLines = props?.numberOfLines;
    let isFontSizeConfigurable = props?.isFontSizeConfigurable ?? true;
    let style: TextStyle | TextStyle[] = props?.style ?? {};
    let isColorProvided = false;

    const { theme } = useContext(ThemeContext);
    const activeColors = Theme[theme.mode];

    // let fontType = props?.fontType ?? fontTypes.REGULAR; // Default to regular font if not specified
    // let fontFamily = renderFontFamily(fontType);

    // set default color as black if not provided in props by updating the styles object
    const setDefaultFontColor = (styleObj: TextStyle) => {
        if (!styleObj?.color) {
            styleObj = {
                ...styleObj,
                color: activeColors.tint,
            };
        }
        return styleObj;
    };

    if (Array.isArray(style)) {
        for (let styleItem of style) {
            if (styleItem?.fontSize) {
                currentFontSize = styleItem?.fontSize;
            }

            // if color prop found, do not override the provided color
            if (styleItem?.color) {
                isColorProvided = true;
            }
        }

        // if color prop not found in whole object, append color at the last index
        if (!isColorProvided) {
            style[style?.length] = setDefaultFontColor(style[style?.length]);
        }
    } else {
        currentFontSize = style?.fontSize ?? DEFAULT_FONT_SIZE;
        style = setDefaultFontColor(style);
    }

    return (
        <Text numberOfLines={numberOfLines} style={[style, { fontSize: currentFontSize + (isFontSizeConfigurable ? fontSize : 0), marginTop: 1 }]}>
            {props.children}
        </Text>
    );
};

export default CustomText;