import axios from "axios";

// use url from .env file
const baseURL = "URL";
const axiosInstance = axios.create({
  baseURL,
});

// interceptors request
axiosInstance.interceptors.request.use(
  (config) => {
    // Add bearer token to the headers if available and where store token
    // const bearerToken = localStorageService.get("accessToken");
    // if (bearerToken) {
    //   config.headers.Authorization = `Bearer ${bearerToken}`;
    // }
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
  get: async <T>(url: string, config?: any): Promise<T | undefined> => {
    try {
      const response = await axiosInstance.get<T>(url, config);
      return response.data;
    } catch (error) {
      console.error("HTTP GET Error:", error);
    }
  },

  post: async <T>(
    url: string,
    data: any,
    config?: any
  ): Promise<T | undefined> => {
    try {
      const response = await axiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      console.error("HTTP POST Error:", error);
    }
  },

  put: async <T>(
    url: string,
    data: any,
    config?: any
  ): Promise<T | undefined> => {
    try {
      const response = await axiosInstance.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      console.error("HTTP PUT Error:", error);
    }
  },

  delete: async <T>(url: string, config?: any): Promise<T | undefined> => {
    try {
      const response = await axiosInstance.delete<T>(url, config);
      return response.data;
    } catch (error) {
      console.error("HTTP DELETE Error:", error);
    }
  },
};

export default httpService;
