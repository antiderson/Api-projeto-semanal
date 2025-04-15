import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // ajuste para a URL da sua API
});

export default api;
