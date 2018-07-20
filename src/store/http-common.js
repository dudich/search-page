import axios from 'axios';
import authConfig from '../authConfig';

export const HTTP = axios.create({
  baseURL: authConfig.baseURL,
  headers: {
    Authorization: `Bearer ${authConfig.token}`,
    'Access-Control-Allow-Origin': '*',
    token : authConfig.token
  },
});