import { useState, useEffect } from "react";
import BaseLayout from "../layouts/BaseLayout";
import { HEADER_MENUS } from "../config/constants/headerMenu";
import { FOOTER_MENUS } from "../config/constants/footerMenu";
import viilogo from "../assets/viilogo.jpeg";
import LOADING from "../components/loading";
import endpoints from "../config/services/api/endpoints";
import api from "../config/services/api/baseAPI";

const ViiPages = () => {
  const [message, setMessage] = useState("Testing API connection ...");
  const [ isLoading, setIsLoading ] = useState(false);
  const url = import.meta.env.VITE_API_URL+endpoints.testConnection.base;
  useEffect(() => {
    console.log("URL: ",url);
    const testConnection = async (url) => {
      setIsLoading(true);
      try {
        const response = await api.get(url); 
        console.log("Response:", response.data);
        setMessage(response.data.message);
      } catch (error) {
        console.error("Connection failed:", error);
        setMessage("Connection failed.");
      } finally {
        setIsLoading(false);
      }
    };
    if (url) {
      testConnection(url);
    }
  }, [url]);

  return (
    <div>
      {!isLoading ? (
        <BaseLayout headerMenu={HEADER_MENUS} footers={FOOTER_MENUS} viilogo={viilogo} children={["Vii Main Page"]}/>
      ) : (
        <LOADING label={"Loading ..."}/>
      )}
    </div>
  );
};
export default ViiPages;