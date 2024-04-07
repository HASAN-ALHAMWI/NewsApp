// Native import 
import { StyleSheet } from "react-native";

// Config import
import { getDeviceDimensions } from "../utils/Device";

const width = getDeviceDimensions().width;

export const newsScreenStyles = StyleSheet.create({
    root: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "white"
    },
    emptyListStyle:{
        justifyContent:"center",
        padding:18
    },
    loginButton:{
        width: width * 0.5
    },
    searchBar: {
        width: width - 28,
        alignSelf: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
      },
})