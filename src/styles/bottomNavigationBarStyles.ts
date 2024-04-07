// Native import 
import { Platform, StyleSheet } from "react-native";

// Config import
import { fontSizes } from ".";

// Utils import 
import { RValue, getDeviceDimensions } from "../utils/Device";

const { height } = getDeviceDimensions();

export const bottomBarHeight = Platform.OS === 'ios' ? height * 0.10 : height * 0.08;

export const bottomNavigationBarStyles = StyleSheet.create({
  customTabBarButton: {
    height: RValue(65),
    width: RValue(70),
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradientButton: {
    borderRadius: 12
  },
  middleTabView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  bottomIcon: {
    height: RValue(20),
    width: RValue(20),
  },
  tabTitle: {
    marginVertical: 10,
    fontSize: fontSizes.xxSmall
  },
  tabIcon: {
    height: RValue(18),
    width: RValue(18),
    marginTop: RValue(25),
  },
  tabBarIconView: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    top: -8,
    backgroundColor: '#000',
  }
})