import { UPDATE_DIARY_NOTES } from '../constants/constants'
import AsyncStorage from '@react-native-async-storage/async-storage';


export function save_diary_note(diaryNote) {
  return async (dispatch) => {

    const fetched_data = JSON.parse(await AsyncStorage.getItem('diary_notes'))

    fetched_data.push(diaryNote)

    await AsyncStorage.setItem('diary_notes', JSON.stringify(fetched_data))

    dispatch({type: UPDATE_DIARY_NOTES, payload: fetched_data})
    
  }
}


export function fetch_diary_notes() {

  return async (dispatch) => {

    if (!await AsyncStorage.getItem('diary_notes')) {
      await AsyncStorage.setItem('diary_notes', '[]')
      dispatch({type: UPDATE_DIARY_NOTES, payload: []})
    } else {
      const fetched_data = JSON.parse(await AsyncStorage.getItem('diary_notes'))
      dispatch({type: UPDATE_DIARY_NOTES, payload: fetched_data})
    }

  }
}