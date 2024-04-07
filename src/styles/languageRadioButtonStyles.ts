import { StyleSheet } from "react-native";
import { RValue } from "../utils/Device";

export const languageRadioButtonStyles = StyleSheet.create({
    radioButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
        borderRadius: 10,
        borderWidth: 2,
        minHeight: RValue(50),
        padding: 15,
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 0.41,
        elevation: 0.0001,
        marginHorizontal: 10
    },
    radioButtonSelected: {
        borderWidth: 2,
        borderColor: 'blue',
    },
    radioCircle: {
        height: RValue(15),
        width: RValue(15),
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    radioInnerCircle: {
        height: RValue(10),
        width: RValue(10),
        borderRadius: 10,
    },
    languageTitle: {
        paddingHorizontal: 10
    },
})