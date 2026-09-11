import { useEffect, useState } from "react";
import api from "../services/api/baseAPI";
import enpoints from "../services/api/enpoints";

function ViiApp() {
  const [message, setMessage] = useState("Testing API connection ...");
  const url = import.meta.env.VITE_API_URL+enpoints.testConnection.base;
  useEffect(() => {
    console.log("URL: ",url);
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
  }, [url]);

  return (
  <div className="flex bg-slate-900">
    <h1>{"======== Vii main page ========="}</h1>
    <h2>{message}</h2>
  </div>
  )
  
}

export default ViiApp;