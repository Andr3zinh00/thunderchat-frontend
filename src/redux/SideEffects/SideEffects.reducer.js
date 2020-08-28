import types from './SideEffects.types'
import { getReduxState } from '../../utils/utils'


const STATE = {
  theme: {
    primaryColor: "#ff1616",
    secondaryColor: "#fff",
    primaryColorDarker: ""
  },
  displayHeaderFooter: true,
}


const INITIAL_STATE = {
  ...STATE,
  ...getReduxState('s')
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOULD_SHOW_FOOTER_AND_HEADER:
      return {
        ...state,
        displayHeaderFooter: !state.displayHeaderFooter
      }
    case types.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state;
  }
}