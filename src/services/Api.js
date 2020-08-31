import axios from 'axios';

const Authorization = "Bearer "+JSON.parse(localStorage.getItem('u')).token;
console.log(Authorization)
const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { 
    'Content-Type': 'application/json',
    Authorization
  }
});

export default api;