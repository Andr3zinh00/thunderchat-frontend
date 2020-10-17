import SockJS from 'sockjs-client';
import { Stomp } from "@stomp/stompjs";
import { getAuth } from '../utils/utils'

const credentials = getAuth().headers;
console.log(credentials, "cred")
console.log(credentials.Authorization)

export const stompClient = {
  connection: undefined
}
export default function connect() {
  const socket = new SockJS("https://thunderchat-backend.herokuapp.com/socket?Authorization=" + getAuth().headers.Authorization);
  const client = Stomp.over(socket)
  client.activate();
  stompClient['connection'] = client;
}
