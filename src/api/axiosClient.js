import axios from 'axios';
export const BASE_URL = 'http://localhost:8000';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default axiosClient;
