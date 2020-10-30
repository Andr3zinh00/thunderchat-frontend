import types from './User.types';
import { getReduxState, cleanLocal } from '../../utils/utils';

const STATE = {
  id: undefined,
  name: undefined,
  email: undefined,
  mention: undefined,
  token: undefined,
  notifications: [],
}




const INITIAL_STATE = {
  ...STATE,
  ...getReduxState('u')
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case types.ON_NOTIFICATIONS:
      const isLive = action.payload?.isLive;
      return {
        ...state,
        notifications: [...state.notifications, ...action.payload]
      }
    case types.DELETE_USER:
      return {
        ...INITIAL_STATE,
        token: undefined,
      }
    case types.CREATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    case types.SIGN_OUT:
      return{
      }
    default:
      return state;
  }
}