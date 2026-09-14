import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ViiApp from "./ViiApp";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <ViiApp />
  </BrowserRouter>
);