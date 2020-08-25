import types from './User.types';

const INITIAL_STATE = {
  id: undefined,
  name: undefined,
  email: undefined,
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
        ...INITIAL_STATE
      }
    default:
      return state;
  }
}