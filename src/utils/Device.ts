// Native import 
import { Dimensions } from "react-native";

// Libarary import 
import { RFValue } from "react-native-responsive-fontsize";
import DeviceInfo from 'react-native-device-info';

const dimensions = Dimensions.get("window");
const aspectRatio = dimensions.height / dimensions.width;

export const RF_VALUE_FONT = 770; // 720 default

export const RValue = (value: number) => {
    return RFValue(value);
};

export const FontValue = (value: number) => {
    return RFValue(value, RF_VALUE_FONT);
};

export const IsPhone = () => {
    return aspectRatio > 1.6;
};

export const IsTablet = () => {
    return !IsPhone();
};

export const hasNotch = () => {
    return DeviceInfo?.hasNotch() || false;
};

export const getDeviceDimensions = () => {
    let height = dimensions.height || 0;
    let width = dimensions.width || 0;
    return { height, width };
};