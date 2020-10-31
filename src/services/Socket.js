import SockJS from 'sockjs-client';
import { toast } from 'react-toastify';
import { Stomp } from "@stomp/stompjs";
import { getAuth } from '../utils/utils';

const credentials = getAuth().headers;
console.log(credentials, "cred")
console.log(credentials.Authorization)

export const connection = {
  client: undefined,
  socket: undefined,
  connected: undefined
};

export default function connect() {
  connection['socket'] = new SockJS("https://thunderchat-backend.herokuapp.com/socket?Authorization=" + getAuth().headers.Authorization);
  connection['client'] = Stomp.over(connection.socket);
  connection.client.onConnect = () => {
    connection['connected'] = {};
    console.log(connection, "conexao on conncet")
  };
  connection.client.activate();

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

export function sendSubscribeNotifi(getNotification) {
  if (connection.client) {
    console.log("entrei aqui ")
    const { client } = connection;
    client.onConnect = () => client.subscribe("/user/queue/sendback", getNotification);
}


export function sendSubscribe(setMessage) {
  const getMessage = (eventRes) => {
    const message = JSON.parse(eventRes.body);
    console.log(message);
    setMessage(past => [message, ...past]);
    return message;
  }

  console.log(connection.client, "asdasdasdasdasd")
  if (connection.client && connection.client.connected) {
    console.log(connection.client.connected);
    connection.client.subscribe("/user/queue/get-msg", getMessage);

  }
}

export function sendMessageChat(data) {

  if (!connection.client) return;
  connection.client.publish({ destination: "/app/send-message", body: JSON.stringify(data) });
}


