import types from './SideEffects.types'
import { getReduxState } from '../../utils/utils'


const STATE = {
  theme: {
    primaryColor: "#ff1616",
    secondaryColor: "#fff",
    fontColor: "#fff",
    primaryColorDarker: "#990d0d"
  },
}


const INITIAL_STATE = {
  ...STATE,
  ...getReduxState('s')
}

export default (state = INITIAL_STATE, action) => {
  //deixei o switch caso tenha outras funcionalidades mais tarde...
  switch (action.type) {

    case types.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state;
  }
}