import { UPDATE_DIARY_NOTES } from '../constants/constants'
import { StorageObject } from '../../utils/storageUtils';


const storage_object = new StorageObject('diary_notes')

export function save_diary_note(diaryNote) {
  return async (dispatch) => {

    const updated_data = await storage_object.pushValue(diaryNote)

    dispatch({type: UPDATE_DIARY_NOTES, payload: updated_data})
    
  }
}


export function fetch_diary_notes() {

  return async (dispatch) => {

    const fetched_data = await storage_object.getStorageObject()
    dispatch({type: UPDATE_DIARY_NOTES, payload: fetched_data})
    
  }
}

export function remove_diary_note(diary_note) {
  return async (dispatch) => {

    const updated_data = await storage_object.removeValue(diary_note)
    dispatch({type: UPDATE_DIARY_NOTES, payload: updated_data})

  }
}