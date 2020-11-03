import types from './SideEffects.types'


const STATE = {
  reloadContacts: false,
  connected: false
}


const INITIAL_STATE = {
  ...STATE,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.RELOAD_CONTACTS:
      return {
        ...state,
        reloadContacts: !state.reloadContacts
      }
    case types.CONNECTED:
      return {
        ...state,
        connected: !state.connected
      };
    default:
      return state;
  }
}