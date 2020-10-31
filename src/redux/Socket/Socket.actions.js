import types from './Socket.types';

export const connect = (sendBack, getMsg) => {
  console.log(sendBack, "cheguie no conncet")
  return {
    type: types.CONNECT,
    payload: { sendBack, getMsg }
  }
};

export const sendMessage = (message) => ({
  type: types.DISPATCH_MESSAGE,
  message
});
