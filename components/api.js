import axios from 'axios';

export const myApi = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 10000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data.data)],
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });