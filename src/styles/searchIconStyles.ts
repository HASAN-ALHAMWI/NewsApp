// Native import 
import { StyleSheet } from "react-native";

// Utils import 
import { RValue } from "../utils/Device";

export const searchIconStyles = StyleSheet.create({
    root: {
        marginHorizontal: 10
    },
    icons: {
        height: RValue(30),
        width: RValue(50),
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
});