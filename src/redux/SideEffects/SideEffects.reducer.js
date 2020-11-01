import types from './SideEffects.types'
import { getReduxState } from '../../utils/utils'


const STATE = {
  theme: {
    primaryColor: "#ff1616",
    secondaryColor: "#fff",
    fontColor: "#fff",
    primaryColorDarker: "#990d0d"
  },
  reloadContacts: false,
  connected: false
}


const INITIAL_STATE = {
  ...STATE,
  ...getReduxState('s')
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case types.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }
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