import types from './SideEffects.types'

const INITIAL_STATE = {
  theme: localStorage.getItem('theme') || {
    primaryColor: "#ff1616",
    secondaryColor: "#fff",
    primaryColorDarker: ""
  },
  displayHeaderFooter: true,
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