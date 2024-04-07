// Native import
import React from 'react';
import { View } from 'react-native';

// Style import
import { horizontalSpacerStyles } from './../styles/horizontalSpacerStyles';

// Define the prop types for the Horizontal Spacer component
interface IHorizontalSpacer {
    smallSpace?: boolean;
    doubleSpace?: boolean;
    triplespace?: boolean;
};

const HorizontalSpacer = (props: IHorizontalSpacer) => {

    if (props?.smallSpace) {
        return (
            <View style={horizontalSpacerStyles.smallSpace} />
        );
    }

    if (props?.triplespace) {
        return (
            <View style={horizontalSpacerStyles.tripleSpace} />
        );
    }

    return (
        <View style={props.doubleSpace ? horizontalSpacerStyles.doubleSpace : horizontalSpacerStyles.singleSpace} />
    );
};

export { HorizontalSpacer };