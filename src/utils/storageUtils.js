import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageObject {
  constructor (key) {
    this.key = key
  }

  async getStorageObject() {
    
    if (await this._isNull()) {
      return await this._initialize()
    } 
    
    return JSON.parse(await AsyncStorage.getItem(this.key))
    
  }

  async removeValue(value_to_delete) {
    
    let storage_object = await this.getStorageObject()
    
    const newStorageObject = storage_object.filter(value => value.id !== value_to_delete.id)
    await AsyncStorage.setItem(this.key, JSON.stringify(newStorageObject))

    return newStorageObject

  }

  async pushValue(value_to_push) {

    let storage_object = await this.getStorageObject()
    
    storage_object.push(value_to_push)
    await AsyncStorage.setItem(this.key, JSON.stringify(storage_object))

    return storage_object

  }

  async _isNull() {

    return await AsyncStorage.getItem(this.key) === null

  }

  async _initialize() {

    await AsyncStorage.setItem(this.key, '[]')

    return []
  }
}