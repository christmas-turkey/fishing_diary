import { combineReducers } from "redux";
import { storageReducer } from './reducers/storageReducer';

export const rootReducer = combineReducers({
  storageItems: storageReducer
})