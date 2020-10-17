import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import sideEffectReducer from './SideEffects/SideEffects.reducer';
import userReducer from './User/User.reducer';
import types from './SideEffects/SideEffects.types';

const middleware = store => next => action => {
  //se a ação for do UserReducer
  const result = next(action);
  console.log("Mudança de estado!");
  
  if (action.type === "SIGN_OUT") {
    localStorage.removeItem('u');
    return result;
  }
  console.log("--------//--------")
  if (types[action.type] === undefined) {
    localStorage.setItem("u", JSON.stringify(store.getState().userReducer))
  } else {
    localStorage.setItem("s", JSON.stringify(store.getState().sideEffectReducer))
  }
  console.log("--------//--------")


  return result;
}

const store = createStore(
  combineReducers({ sideEffectReducer, userReducer }),
  applyMiddleware(thunk, middleware)
);

export default store;