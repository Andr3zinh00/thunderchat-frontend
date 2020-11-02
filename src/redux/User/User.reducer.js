import types from './User.types';
import { getReduxState, cleanLocal } from '../../utils/utils';

const STATE = {
  id: undefined,
  name: undefined,
  email: undefined,
  mention: undefined,
  token: undefined,
  notifications: [],
  idNotification: undefined,
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
      return {
        ...state,
        notifications: [...state.notifications, ...action.payload.notification],
        idNotification: state.idNotification || action.payload._id
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
      return {
        ...INITIAL_STATE
      }

    case types.REMOVE_NOTIFICATIONS:
      console.log(state.notifications)
      console.log(action.payload)
      return {
        ...state,
        notifications: state.notifications.filter(noti => noti._id !== action.payload)
      }

    default:
      return state;
  }
}