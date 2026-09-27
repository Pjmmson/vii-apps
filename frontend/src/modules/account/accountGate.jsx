import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const ViiAccountMain = lazy(() => import("./viiAccountMain"));
function AccountGate () {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/main" element={<ViiAccountMain />}/>
                <Route path="/sign-in" element={<ViiAccountMain />}/>
                <Route path="/create" element={<ViiAccountMain />}/>
            </Routes>
        </Suspense>
    );
};
export default AccountGate;