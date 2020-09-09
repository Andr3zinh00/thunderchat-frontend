import axios from 'axios';
import { getAuth } from '../utils/utils';

const Authorization = getAuth();

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: !Authorization.headers.Authorization.endsWith(undefined) ? {
    ...Authorization.headers
  } : {
      "Content-Type": 'application/json'
    }
});

export default api;