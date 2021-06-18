import { UPDATE_PHOTOS_COLLECTION } from '../constants/constants'
import { StorageObject } from '../../utils/storageUtils';


const storage_object = new StorageObject('photos')

export function save_photo(photo) {
  return async (dispatch) => {

    const updated_data = await storage_object.pushValue(photo)

    dispatch({type: UPDATE_PHOTOS_COLLECTION, payload: updated_data})
    
  }
}


export function fetch_photos() {

  return async (dispatch) => {

    const fetched_data = await storage_object.getStorageObject()
    dispatch({type: UPDATE_PHOTOS_COLLECTION, payload: fetched_data})

  }
}

export function remove_photo(photo) {
  return async (dispatch) => {

    const updated_data = await storage_object.removeValue(photo)
    dispatch({type: UPDATE_PHOTOS_COLLECTION, payload: updated_data})

  }
}