import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  //Storing data
  static storeData = async (key: any, value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      console.log(
        '🚀 ~ file: Storage.ts ~ line 10 ~ Storage ~ storeData= ~ e',
        e,
      );
    }
  };

  //Reading data
  static getData = async (key: any) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
        // value previously stored
        return JSON.parse(jsonValue);
      }
      return null;
    } catch (e) {
      // error reading value
    }
  };

  // Removing data
  static removeData = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // error removing value
      console.log(
        '🚀 ~ file: Storage.ts ~ line 10 ~ Storage ~ removeData= ~ e',
        e,
      );
    }
  };
}
