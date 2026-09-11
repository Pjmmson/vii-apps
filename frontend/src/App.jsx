import { useEffect, useState } from "react";
import api from "../services/api/baseAPI";
import enpoints from "../services/api/enpoints";

function App() {
  const [message, setMessage] = useState("Testing API connection ...");

  useEffect(() => {
    console.log("URL: ",import.meta.env.VITE_API_URL+enpoints.testConnection.base);
    const url = import.meta.env.VITE_API_URL+enpoints.testConnection.base;
    const testConnection = async (url) => {
      try {
        const response = await api.get(url); 
        console.log("Response:", response.data);
        setMessage(response.data.message);
      } catch (error) {
        console.error("Connection failed:", error);
        setMessage("Connection failed.");
      }
    };
    testConnection(url);
  }, []);

  return (
  <div>
    <h1>{"Are you ready to Vii your problems ...?"}</h1>
    <h2>{message}</h2>
  </div>
  )
  
}

export default App;