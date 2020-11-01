import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import sideEffectReducer from './SideEffects/SideEffects.reducer';
import socketReducer from './Socket/Socket.reducer';
import userReducer from './User/User.reducer';
import types from './SideEffects/SideEffects.types';

const middleware = store => next => action => {
  //se a ação for do UserReducer
  const result = next(action);

  if (action.type === "SIGN_OUT") {
    localStorage.removeItem('u');
    return result;
  }

  console.log("--------//--------")
  if (types[action.type] === undefined) {
    const user =  { ...store.getState().userReducer };
    delete user.notifications;
    localStorage.setItem("u", JSON.stringify(user));
  } else {
    const reducer = { ...store.getState().sideEffectReducer };
    delete reducer.reloadContacts;
    delete reducer.connected;
    localStorage.setItem("s", JSON.stringify(reducer));
  }
  console.log("--------//--------")


  return result;
}

const store = createStore(
  combineReducers({ sideEffectReducer, userReducer, socketReducer }),
  applyMiddleware(thunk, middleware)
);

export default store;