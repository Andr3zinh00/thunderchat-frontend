import axios from 'axios';

const Authorization = "Bearer "+JSON.parse(localStorage.getItem('u'))?.token;
console.log(Authorization)
const api = axios.create({
  baseURL: 'https://thunderchat-backend.herokuapp.com/',
  headers: { 
    'Content-Type': 'application/json',
    Authorization
  }
});

export default api;