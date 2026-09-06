import { useEffect, useState } from "react";
import api from "../services/api/axios";

function App() {
  const [message, setMessage] = useState("Testing connection...");

  useEffect(() => {
    console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
    console.log("Axios baseURL:", api.defaults.baseURL);

    const testConnection = async () => {
      try {
        const response = await api.get("/test-connection");

        console.log("Response:", response.data);

        setMessage(response.data.message);
      } catch (error) {
        console.error("Connection failed:", error);
        console.error(
          "Request URL:",
          error.config?.baseURL + error.config?.url
        );

        setMessage("Connection failed.");
      }
    };

    testConnection();
  }, []);

  return (
  <div>
    <h1>{"Are you ready to Vii your problems ..."}</h1>
    <h2>{message}</h2>
  </div>
  )
  
}

export default App;