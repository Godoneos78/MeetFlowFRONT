import axios from 'axios';

const api = axios.create({
  baseURL: 'http://meetflowback-production.up.railway.ap', // URL del backend
});

export default api;
