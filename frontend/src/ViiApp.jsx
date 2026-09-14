import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViiPages from "./modules/ViiPages";

function ViiApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViiPages />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default ViiApp;