import axios from "axios";
import queryString from "query-string";
import { baseURL } from './baseURL'
const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  },
  withCredentials: true
});

publicClient.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
});

publicClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  console.log(err);
  throw err.response.data;
});

export default publicClient;