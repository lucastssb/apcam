import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apcambrasil.com.br/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
