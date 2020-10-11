import axios from 'axios';
import { getAuth } from '../utils/utils';

const Authorization = getAuth();

const api = axios.create({
  baseURL: 'https://thunderchat-backend.herokuapp.com/',
  headers: { 
    'Content-Type': 'application/json',
    Authorization
  }
});

export default api;