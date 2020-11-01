import types from './Socket.types'
// import { getReduxState } from '../../utils/utils'
// import { getReduxState } from '../../utils/utils'

import SockJS from 'sockjs-client';
import { Stomp } from "@stomp/stompjs";
import { getAuth } from '../../utils/utils'

const INITIAL_STATE = {
  connection: undefined
}

export default (state = INITIAL_STATE, action) => {
  //deixei o switch caso tenha outras funcionalidades mais tarde...
  switch (action.type) {
    case types.CONNECT:
      console.log(" REDUCE SOCKET")
      const connection = {};
      connection['socket'] = new SockJS("https://thunderchat-backend.herokuapp.com/socket?Authorization=" + getAuth().headers.Authorization);
      connection['client'] = Stomp.over(connection.socket);
      console.log("aaaaaa",connection);
      connection.client.onConnect = () => {
        console.log("connected")
        connection.client.subscribe("/user/queue/sendback", action.payload.sendBack);

        connection.client.subscribe("/user/queue/get-msg", action.payload.getMsg);
      };
      connection.client.activate();
      return {
        connection: {
          ...connection
        }
      }
    default:
      return state;
  }
}