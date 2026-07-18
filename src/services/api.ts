import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  headers: {
    'Authorization': 'Bearer 04db447c-b81c-4fe2-b1c4-415b5c9c9a9e',
    'Content-Type': 'application/json',
  },
});

