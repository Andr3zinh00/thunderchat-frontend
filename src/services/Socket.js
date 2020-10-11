import io from 'socket.io-client';

const socketio = io("https://thunderchat-backend.herokuapp.com");

export default socketio;