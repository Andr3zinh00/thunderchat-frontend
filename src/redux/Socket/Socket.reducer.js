import types from './Socket.types'
// import { getReduxState } from '../../utils/utils'

import SockJS from 'sockjs-client';
import { Stomp } from "@stomp/stompjs";
import { getAuth } from '../../utils/utils'

const STATE = {
  connection: undefined
}


const INITIAL_STATE = {
  ...STATE,
}

export default (state = INITIAL_STATE, action) => {
  //deixei o switch caso tenha outras funcionalidades mais tarde...
  switch (action.type) {
    case types.CONNECT:
      
    default:
      return state;
  }
}