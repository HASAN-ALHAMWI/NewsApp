// Native import
import { Image, ImageSourcePropType, View } from "react-native";

// Style import
import { bottomNavigationBarStyles } from "././../styles/bottomNavigationBarStyles";

// Component import
import Text from './../components/CustomText';
import { VerticalSpacer } from "./VerticalSpacer";
import { Theme } from "../config/theme";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const tabBarIconView = (screenName: string, focused: boolean, icon: ImageSourcePropType) => {

    const { theme } = useContext(ThemeContext);
    const activeColors = Theme[theme.mode];

    return (
        <View style={bottomNavigationBarStyles.tabBarIconView}>
            <Image style={[bottomNavigationBarStyles.tabIcon, { tintColor: focused ? activeColors.$goldColor : activeColors.tint }]} source={icon} />
            <VerticalSpacer smallSpace />
            <Text style={[bottomNavigationBarStyles.tabTitle, { color: focused ? activeColors.$goldColor : activeColors.tint }]}>{screenName}</Text>
        </View>
    );
}
