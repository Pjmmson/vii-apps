import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const ViiAccountMain = lazy(() => import("./viiAccountMain"));
const ViiSignIn = lazy(() => import("./viiSignIn"));
const ViiCreateAccount = lazy(() => import("./viiCreateAccount"));
function AccountGate () {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/main" element={<ViiAccountMain />}/>
                <Route path="/sign_in" element={<ViiSignIn />}/>
                <Route path="/create_account" element={<ViiCreateAccount />}/>
            </Routes>
        </Suspense>
    );
};
export default AccountGate;