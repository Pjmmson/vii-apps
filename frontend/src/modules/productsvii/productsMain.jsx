import { Routes, Route } from "react-router-dom";
import AgricultureMain from "./agriculture/agricultureMain";

const ProductMain = () => {
    return (
        <Routes>
            <Route path="/agriculture" element={<AgricultureMain />} />
        </Routes>
    );
};
export default ProductMain;
