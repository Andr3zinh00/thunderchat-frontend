import axios from 'axios';
import { getAuth } from '../utils/utils';

const Authorization = getAuth();

const api = axios.create({
  baseURL: 'https://thunderchat-backend.herokuapp.com/',
  headers: !Authorization.headers.Authorization.endsWith(undefined) ? {
    ...Authorization.headers
  } : {
      "Content-Type": 'application/json'
    }
});

api.interceptors.request.use(function (config) {
  const token = getAuth();
  if (config.url === "user/login" || config.url === "user/create") return config;
  config.headers.Authorization = token.headers.Authorization;
  return config;
});

export default api;