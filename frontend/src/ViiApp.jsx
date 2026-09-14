import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Main
const MainPage = lazy(() => import("./modules/ViiPages"));
// Products
const ProductAgriculture = lazy(() => import("./modules/productsvii/agriculture/agricultureMain"));
const ProductEnvironment = lazy(() => import("./modules/productsvii/environments/environmentMain"));
const ProductHealthcare = lazy(() => import("./modules/productsvii/healthcare/healtcareMain"));
// vii models
const ViiClassifierMain = lazy(() => import("./modules/viimodels/classifications/viiClassifierMain"));
const ViiRegressorMain = lazy(() => import("./modules/viimodels/regressions/viiRegressorMain"));
// Vii services
const ViiSolutionsMain = lazy(() => import("./modules/viiservices/vii-solutions/viiSolutions"));
const ViiYoursMain = lazy(() => import("./modules/viiservices/vii-yours/viiYoursMain"));
// Support
const GetHelpMain = lazy(() => import("./modules/viisupport/gethelp/getHelpMain"));
const ExploreSupportMain = lazy(() => import("./modules/viisupport/exploresupport/exploreSupport"));

function ViiApp() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/agriculture" element={<ProductAgriculture />} />
        <Route path="/environment" element={<ProductEnvironment />} />
        <Route path="/healthcare" element={<ProductHealthcare />} />
        <Route path="/vii-classifier" element={<ViiClassifierMain />} />
        <Route path="/vii-regressor" element={<ViiRegressorMain />}/>
        <Route path="/vii-solutions" element={<ViiSolutionsMain />} />
        <Route path="/vii-yours" element={<ViiYoursMain />} />
        <Route path="/get-help" element={<GetHelpMain />}/>
        <Route path="/explore-support" element={<ExploreSupportMain />} />
      </Routes>
    </Suspense>
  );
};
export default ViiApp;