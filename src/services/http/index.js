import axios from "axios";
import { toast } from "react-toastify";

// use url from .env file
const baseURL = process.env.REACT_APP_DOMAIN_URL;
const axiosInstance = axios.create({
  baseURL,
});

// interceptors request
axiosInstance.interceptors.request.use(
  (config) => {
    // Add bearer token to the headers if available and where store token
    const bearerToken = process.env.REACT_APP_BEARER_TOKEN;
    if (config.headers) {
      if (bearerToken) {
        config.headers.Authorization = `Bearer ${bearerToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// interceptors response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

const httpService = {
  updateBaseUrl: (url) => {
    axiosInstance.defaults.baseURL = url;
  },

  get: async (url, config) => {
    try {
      const response = await axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      console.error("HTTP GET Error:", error);
      toast.error("Failed to fetch data. Please try again.");
    }
  },

  post: async (url, data, config) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("HTTP POST Error:", error);
    }
  },

  put: async (url, data, config) => {
    try {
      const response = await axiosInstance.put(url, data, config);
      return response.data;
    } catch (error) {
      console.error("HTTP PUT Error:", error);
    }
  },

  delete: async (url, config) => {
    try {
      const response = await axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      console.error("HTTP DELETE Error:", error);
    }
  },
  all: async (requests) => {
    try {
      const response = await axios.all(requests);
      return response;
    } catch (error) {
      console.error("HTTP ALL Error:", error);
    }
  },
};

export default httpService;
