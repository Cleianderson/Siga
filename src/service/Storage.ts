import AsyncStorage from '@react-native-community/async-storage'


  const getObj = async <T>(key: string): Promise<T | undefined> => {
    const _item = await AsyncStorage.getItem(key)

    if (typeof _item === 'string') {
      return JSON.parse(_item)
    }
    return undefined
  }

  const setObj = async <T>(key: string, data: Object | T): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(data))
  }

export { getObj, setObj }