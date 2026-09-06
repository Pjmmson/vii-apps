import { useEffect, useState } from "react";
import api from "../services/api/baseAPI";
import enpoints from "../services/api/enpoints";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Testing API connection ...");

  // useEffect(() => {
  //   console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
  //   console.log("Axios baseURL:", api.defaults.baseURL);
  //   const testConnection = async () => {
  //     try {
  //       // Just pass "test-connection" without any slashes
  //       const response = await api.get(enpoints.testConnection.base); 

  //       console.log("Response:", response.data);
  //       setMessage(response.data.message);
  //     } catch (error) {
  //       console.error("Connection failed:", error);
  //       setMessage("Connection failed.");
  //     }
  //   };
  //   testConnection();
  // }, []);
  useEffect(() => {
    const controller = new AbortController();
    axios.get("http://127.0.0.1:8000/api/test-connection",{timeout:10000,
      signal: controller.signal
    }).then(response => {console.log(response.data.message);
      setMessage("Connection success !");
    }).catch(error => {
      if (axios.isCancel(error)) {
        console.log("Request canceled intentionally during cleanup.");
      } else {
        console.error("Connection failed: ", error);
        setMessage("Failed connection ...");
      }
    });
    return () => {
      controller.abort();
    };
  },[]);

  return (
  <div>
    <h1>{"Are you ready to Vii your problems ...?"}</h1>
    <h2>{message}</h2>
  </div>
  )
  
}

export default App;