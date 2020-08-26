import types from './User.types';

const INITIAL_STATE = {
  id: undefined,
  name: undefined,
  email: undefined,
  token:localStorage.getItem('T'),
}

export default (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case types.CREATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case types.DELETE_USER:
      return {
        ...INITIAL_STATE,
        token:undefined,
      }
    case types.CREATE_TOKEN:
      return {
        ...state,
        token:action.payload,
      }
    default:
      return state;
  }
}