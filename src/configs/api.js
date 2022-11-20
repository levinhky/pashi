import axios from "axios";

const axiosClient = axios.create({
  // baseURL: 'https://json-api-public.herokuapp.com/api/',
  baseURL: 'https://ecommerce-public-api.herokuapp.com/api/v2/',
  // baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  throw error;
});


export default axiosClient;