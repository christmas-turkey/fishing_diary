import { UPDATE_DIARY_NOTES, UPDATE_PHOTOS_COLLECTION, UPDATE_GOALS_LIST  } from "../constants/constants";

const initialState = {
  diaryNotes: [],
  goals: [],
  photos: []
}

export const storageReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_DIARY_NOTES:
      return {...state, diaryNotes: action.payload}
    case UPDATE_GOALS_LIST:
      return {...state, goals: action.payload}
    case UPDATE_PHOTOS_COLLECTION:
      return {...state, photos: action.payload}
    default:
      return state
  }
}
