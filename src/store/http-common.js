import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:8081/`,
  headers: {
    Authorization: 'Bearer DQ/rMWfGglCvxnGgLl2n7EB6FGJ1DWh/MSmhOHRCDKkQ+E2m3bRyLsxZSDP6NN+m',
    'Access-Control-Allow-Origin': '*',
    token : 'DQ/rMWfGglCvxnGgLl2n7EB6FGJ1DWh/MSmhOHRCDKkQ+E2m3bRyLsxZSDP6NN+m'
  },
});