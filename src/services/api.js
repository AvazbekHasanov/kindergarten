import axios from 'axios';

const apiClient = (customConfig = {}) => {
  return axios.create({
    baseURL: customConfig.baseURL || import.meta.env.VITE_API_BASE_URL || 'https://api-kindergarten-production.up.railway.app/api',
    headers: {
      'Content-Type': 'application/json',
      ...customConfig.headers // Merges custom headers with defaults
    },
    timeout: 10000,
  });
};

const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://api-kindergarten-production.up.railway.app';


export default {
  get: (url, config = {}) => apiClient(config).get(url, config),
  post: (url, data, config = {}) => apiClient(config).post(url, data, config),
  put: (url, data, config = {}) => apiClient(config).put(url, data, config),
  delete: (url, config = {}) => apiClient(config).delete(url, config),
  baseURL,
};
