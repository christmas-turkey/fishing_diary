import { UPDATE_DIARY_NOTES  } from "../constants/constants";

const initialState = []

export const diaryNotesReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_DIARY_NOTES:
      return [...action.payload]
    default:
      return state
  }
}
