import types from './Socket.types';

export const connect = () => ({
  type: types.CONNECT,
});

export const sendMessage = (message) => ({
  type: types.DISPATCH_MESSAGE,
  message
});
