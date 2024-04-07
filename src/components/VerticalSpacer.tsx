// Native import
import React from 'react';
import { View } from 'react-native';

// Style import
import { verticalSpacerStyles } from './../styles/verticalSpacerStyles';

// Define the prop types for the Vertical Spacer component
interface IVerticalSpacer {
    smallSpace?: boolean;
    doubleSpace?: boolean;
    tripleSpace?: boolean;
};

const VerticalSpacer = (props: IVerticalSpacer) => {

    if (props?.smallSpace) {
        return (
            <View style={verticalSpacerStyles.smallSpace} />
        );
    }

    if (props?.tripleSpace) {
        return (
            <View style={verticalSpacerStyles.tripleSpace} />
        );
    }

    return (
        <View style={props.doubleSpace ? verticalSpacerStyles.doubleSpace : verticalSpacerStyles.singleSpace} />
    );
};

export { VerticalSpacer };