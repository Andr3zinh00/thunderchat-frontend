import SockJS from 'sockjs-client';
import { Stomp } from "@stomp/stompjs";
import { getAuth } from '../utils/utils'

const credentials = getAuth().headers;
console.log(credentials, "cred")
const socket = new SockJS("http://localhost:8080/socket?Authorization="+credentials.Authorization);
const stompClient = Stomp.over(socket);

export default stompClient;

// stompClient.connect({}, (frame) => {
//   console.log(frame)
//   socketConnect()
// }, () => console.log("errinhosjdoijaisodjiaojsdi"));
// console.log(socket, stompClient);

// const socketConnect = function connect(disconnect, listenerURL, senderURL, callbackListener, payload) {
//   console.log(disconnect, listenerURL, senderURL, callbackListener, payload)
//   if (disconnect) {
//     stompClient.disconnect();
//     return;
//   }
//   console.log("alskdklasd")
//   stompClient.onConnect(() => {
//     console.log("alskdklasdasdasdasd123123")
//     if (listenerURL) stompClient.subscribe(listenerURL, callbackListener);

//     if (senderURL) stompClient.send(senderURL, {}, JSON.stringify(payload));
//   })
// }

// export default socketConnect;