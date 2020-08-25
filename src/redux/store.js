import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import sideEffectReducer from './SideEffects/SideEffects.reducer';
import userReducer from './User/User.reducer';

const store = createStore(combineReducers({sideEffectReducer, userReducer}), applyMiddleware(thunk));

export default store;