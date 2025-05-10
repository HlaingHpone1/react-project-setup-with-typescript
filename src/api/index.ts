import axios from 'axios';

export const baseURL = import.meta.env.VITE_BASE_URL + '/api';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    ContentType: 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default api;
