import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const useAsyncStorage = (key: string, initialValue: any) => {
  const [data, setData] = useState(initialValue);
  const [retrivedFromStorage, setRetrievedFromStorage] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const value = (await AsyncStorage.getItem(key)) ?? '';
        setData(value);
        setRetrievedFromStorage(value !== '');
      } catch (error) {
        console.error('useAsyncStorage getItem error:', error);
      }
    })();
  }, [key, initialValue]);

  const setNewData = async (value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      setData(value);
    } catch (error) {
      console.error('useAsyncStorage setItem error:', error);
    }
  };

  return [data, setNewData, retrivedFromStorage];
};
export default useAsyncStorage;
