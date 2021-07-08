import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT_URL;

if (!baseURL)
  throw new Error(
    '`REACT_APP_API_ENDPOINT_URL` value is required! Try adding `.env` file on root directory and add value to `REACT_APP_API_ENDPOINT_URL`.'
  );

const api = axios.create({ baseURL });
export default api;
