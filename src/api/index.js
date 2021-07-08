import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL = process.env.REACT_APP_API_ENDPOINT_URL;
// const baseURL = 'blahblah.com/api/nowhere';

if (!baseURL)
  throw new Error(
    '`REACT_APP_API_ENDPOINT_URL` value is required! Try adding `.env` file on root directory and add value to `REACT_APP_API_ENDPOINT_URL`.'
  );

const api = axios.create({ baseURL });

api.interceptors.response.use(null, error => {
  const isExpectedError = error.response && error.response.status >= 400 && error.response.status < 500;
  if (!isExpectedError) {
    toast.error('Something went wrong, try again later!');
  }

  if (error.response && error.response.status === 404) {
    toast('API returns nothing, try again later!');
  }
  return Promise.reject(error);
});

export const getTopRealEstate = async () => {
  const { data } = await api.get('?page=1');
  return data.result.slice(0, 3);
};

export const getSearchResult = async searchText => {
  const { data } = await api.get(`/?city_name=${searchText}`);
  return data.result;
};

export default api;
