import axios from 'axios';

const instance = axios.create(
    {
        baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/' : 'http://166.78.99.49:8000/',
        // timeout: 1000,
      }
);

export default instance;
