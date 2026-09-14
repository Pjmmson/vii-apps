import axios from "axios";

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "http://127.0.0",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    withCredentials: true,
    withXSRFToken: true,
    timeout: 10000,
  });

api.interceptors.response.use(
  (response) => response ?? "",
  (error) => {
    console.error("API Error:", error);
    console.error("Failed Request Config:", error.config);
    return Promise.reject(error);
  }
);
export default api;

