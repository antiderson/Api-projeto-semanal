import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.30.202:8080', // ajuste para a URL da sua API
});

export default api;
