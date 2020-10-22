import SockJS from 'sockjs-client';
import { toast } from 'react-toastify';
import { Stomp } from "@stomp/stompjs";
import { getAuth } from '../utils/utils'

const credentials = getAuth().headers;
console.log(credentials, "cred")
console.log(credentials.Authorization)

export const stompClient = {
  connection: undefined
}
const socket = new SockJS("https://thunderchat-backend.herokuapp.com/socket?Authorization=" + getAuth().headers.Authorization);
const client = Stomp.over(socket)
client.activate();
stompClient['connection'] = client;

export default function connect() {
}

export function sendRequestChat(user, value) {
  client.publish({
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

export function sendSubscribe(setMessage) {
  const getMessage = (eventRes) => {
    const message = JSON.parse(eventRes.body);
    console.log(message);
    setMessage(past => [message, ...past]);
    return message;
  }
  if (client.connected) {
    client.subscribe("/user/queue/get-msg", getMessage);
  }
}

export function sendMessageChat(data) {
  client.publish({ destination: "/app/send-message", body: JSON.stringify(data) });
}