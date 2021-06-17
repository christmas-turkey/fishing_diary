import { UPDATE_GOALS_LIST } from '../constants/constants'
import { StorageObject } from '../../utils/storageUtils';


const storage_object = new StorageObject('goals')

export function save_goal(goal) {
  return async (dispatch) => {

    const updated_data = await storage_object.pushValue(goal)

    dispatch({type: UPDATE_GOALS_LIST, payload: updated_data})
    
  }
}


export function fetch_goals() {

  return async (dispatch) => {

    const fetched_data = await storage_object.getStorageObject()
    dispatch({type: UPDATE_GOALS_LIST, payload: fetched_data})

  }
}

export function remove_goal(goal) {
  return async (dispatch) => {

    const updated_data = await storage_object.removeValue(goal)
    dispatch({type: UPDATE_GOALS_LIST, payload: updated_data})

  }
}