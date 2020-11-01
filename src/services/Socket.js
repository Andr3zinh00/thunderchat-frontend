import SockJS from 'sockjs-client';
import { toast } from 'react-toastify';
import { Stomp } from "@stomp/stompjs";
import { getAuth } from '../utils/utils';

const credentials = getAuth().headers;

export const connection = {
  client: undefined,
};
const factory = () => new SockJS("https://thunderchat-backend.herokuapp.com/socket?Authorization=" + getAuth().headers.Authorization);

export default function connect(callback) {
  connection['client'] = Stomp.over(factory);
  connection.client.onConnect = () => {
    console.log("conectou no webSocket");
    callback();
  }
  connection.client.activate();
}

export function sendRequestChat(user, value) {
  connection.client.publish({
    destination: "/app/send-notification",
    body: JSON.stringify({
      content: "O usuário " + user.mention + " quer ser seu contato.",
      from: user.mention,
      to: value,
      type: "INVITE",
      time: new Date(),
    })
  }
  );
  toast.success(`Pedido de amizade enviado para ${value}!`)
}

export function sendSubscribeNotifi(getNotification) {
  if (connection.client) {
    connection.client.subscribe("/user/queue/sendback", getNotification);
  }
}


export function sendSubscribe(getMsg) {
  if (connection.client && connection.client.connected) {
    connection.client.subscribe("/user/queue/get-msg", getMsg);
  }
}


export function sendMessageChat(data) {
  if (!connection.client) return;
  connection.client.publish({ destination: "/app/send-message", body: JSON.stringify(data) });
}



