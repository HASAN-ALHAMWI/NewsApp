import { StyleSheet } from "react-native"
import { RValue } from "../utils/Device";


export const changeLanguageScreenStyles = StyleSheet.create({
    root: {
        flex: 1,
    },
    scrollViewStyles: {
        marginHorizontal: 25,
    },
    languageItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginVertical: 4,
        borderRadius: 10,
        minHeight: RValue(50),
        padding: 15,
        alignItems: "center",
        shadowColor: "#67658A",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    title: {},
    Icon: {},
    chevronIcon: {},

});