import { useEffect, useState } from "react";
import api from "../services/api/baseAPI";
import enpoints from "../services/api/enpoints";
import MainPageLayout from "../layouts/MainPageLayout";
import { HEADER_MENUS } from "../config/mainpage/headerMenu";
import { FOOTER_MENUS } from "../config/mainpage/footerMenu";
import LOADING from "../components/loading";

function ViiApp() {
  const [message, setMessage] = useState("Testing API connection ...");
  const [ isLoading, setIsLoading ] = useState(false);
  const url = import.meta.env.VITE_API_URL+enpoints.testConnection.base;
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
    <>
    {!isLoading ? (
      <MainPageLayout headerMenu={HEADER_MENUS} footers={FOOTER_MENUS}/>
    ) : (
      <LOADING label={"Loading ..."}/>
    )}
    </>
  );
};
export default ViiApp;