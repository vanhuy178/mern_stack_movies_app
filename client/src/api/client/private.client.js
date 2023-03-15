import axios from "axios";
import queryString from "query-string";

const baseURL = "http://localhost:5000/api/v1/";

const privateClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  },

  withCredentials: true
});

privateClient.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("actkn")}`
    }
  }

});

privateClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  console.log(err);
  throw err.response.data;
});

export default privateClient;