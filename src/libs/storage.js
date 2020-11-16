import AsyncStorage from '@react-native-community/async-storage';
import AxyncStorage from '@react-native-community/async-storage';

class Storage {
  static instace = Storage();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);

      return true;
    } catch (error) {
      console.log('Storage store error', error);

      return false;
    }
  };

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('Storage get error', error);

      throw error;
    }
  };

  multiGet = async (keys) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.log('Storage multiGet error', error);

      throw error;
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.log('Storage getAllKeys error', error);

      throw error;
    }
  };

  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key);

      return true;
    } catch (error) {
      console.log('Storage remove error', error);

      return false;
    }
  };
}
