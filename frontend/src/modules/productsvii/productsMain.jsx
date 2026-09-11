import { Routes, Route } from "react-router-dom";
import ModelViis from "./modelVii/modelViis";

const ProductMain = () => {
    return (
        <Routes>
            <Route path="/model-viis/*" element={<ModelViis />} />
        </Routes>
    );
};
export default ProductMain;
