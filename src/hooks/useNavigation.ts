import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// This custom hook provides a wrapper over the react's useNavigation hook
export default () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigate = (screenName: string, params?: any) => {
        navigation.navigate(screenName, params);
    }

    const replace = (stackName: string) => {
        navigation.replace(stackName);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const popToPop = () => {
        navigation.popToTop();
    }

    return {
        navigate,
        replace,
        goBack,
        popToPop
    };
}