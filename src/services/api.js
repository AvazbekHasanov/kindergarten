import axios from 'axios';

const apiClient = (customConfig = {}) => {
  return axios.create({
    baseURL: customConfig.baseURL || import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    headers: {
      'Content-Type': 'application/json',
      ...customConfig.headers // Merges custom headers with defaults
    },
    timeout: 10000,
  });
};

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';


export default {
  get: (url, config = {}) => apiClient(config).get(url, config),
  post: (url, data, config = {}) => apiClient(config).post(url, data, config),
  put: (url, data, config = {}) => apiClient(config).put(url, data, config),
  delete: (url, config = {}) => apiClient(config).delete(url, config),
  baseURL,
};
