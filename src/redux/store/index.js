import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './../rootReducer';

export default store = createStore(rootReducer, applyMiddleware(thunk))