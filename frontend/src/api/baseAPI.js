import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Backend responded with an error status code (404, 500, 403)
      console.error(`Backend Error [${error.response.status}]:`, error.response.data);
    } else if (error.request) {
      // Server did not respond (Server down, wrong host/port, or CORS block)
      console.error("Network Error / Server Unreachable / CORS Blocked:", error.message);
    } else {
      console.error("Request Configuration Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default API;