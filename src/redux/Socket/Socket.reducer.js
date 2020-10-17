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

      const credentials = getAuth().headers;
      console.log(credentials.Authorization)
      const socket = new SockJS("https://thunderchat-backend.herokuapp.com/socket?Authorization=" + credentials.Authorization);
      const stompClient = Stomp.over(socket);
      // stompClient.activate();
      stompClient.connect({}, () => {

        console.log("connected")
        stompClient.subscribe("/user/queue/sendback", (eventRes) => {
          console.log("subscribe");
        });

        stompClient.subscribe("/user/queue/get-msg", (eventRes) => {
          console.log("subscribe");
        });
        return {
          connection: stompClient
        }
      });
    default:
      return state;
  }
}