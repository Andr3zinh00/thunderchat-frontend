import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import sideEffectReducer from './SideEffects/SideEffects.reducer';
import socketReducer from './Socket/Socket.reducer';
import userReducer from './User/User.reducer';
import types from './SideEffects/SideEffects.types';
import socketTypes from './Socket/Socket.types';


const middleware = store => next => action => {
  //se a ação for do UserReducer
  const result = next(action);
<<<<<<< Updated upstream
  console.log("Mudança de estado!", "action:"+action.type);

  if (socketTypes[action.type])
=======
  console.log("Mudança de estado!", action);

  if (action.type === "SIGN_OUT") {
    localStorage.removeItem('u');
>>>>>>> Stashed changes
    return result;


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
  combineReducers({ sideEffectReducer, userReducer, socketReducer }),
  applyMiddleware(thunk, middleware)
);

export default store;