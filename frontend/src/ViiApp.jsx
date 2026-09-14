import { Routes, Route } from "react-router-dom";
import ViiPages from "./modules/ViiPages";

function ViiApp() {
  return (
    <Routes>
      <Route path="/" element={<ViiPages />} />
    </Routes>
  );
};
export default ViiApp;