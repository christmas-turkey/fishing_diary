import { combineReducers } from "redux";
import { diaryNotesReducer } from './reducers/DiaryReducer';

export const rootReducer = combineReducers({
  diaryNotes: diaryNotesReducer
})