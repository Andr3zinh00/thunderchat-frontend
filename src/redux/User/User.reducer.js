import types from './User.types';
import { getReduxState } from '../../utils/utils';

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
      //diferencia se a notificação é em tempo real ou não
      //A notificação em tempo real vem como um objeto
      //para continuar com o spread operator coloquei a 
      //mensagem dentro de um array
      // const payload = isLive ? [{ ...action.payload }] : action.payload;
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
    default:
      return state;
  }
}