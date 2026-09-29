import { useCallback, useState } from "react";

export function useAccountSignInForm () {
    const [ signInAccData, setsignInAccData ] = useState({
        userName:  '',
        password: '',
    });
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setsignInAccData((prev) => ({...prev, [name]: value}));
    },[setsignInAccData]);
    const handleSignIn = () => {};
    return {
        signInAccData,
        isLoading,
        error,
        handleChange,
        handleSignIn,
    };
};