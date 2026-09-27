import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAccountForm () {
    const navigate = useNavigate();
    const [ header, setHeader ] = useState({title: 'one-accuount-for-everything'});
    const [ accountData, setAccountData ] = useState({
        name:  '',
        email: '',
        address: '',
        mobile: '',
        password: '',
        work_category: ''
    });
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setAccountData((prev) => ({...prev, [name]: value}));
    },[setAccountData]);
    const handleSignIn = () => {};
    const handleCreate = () => {};
    const handleClicks = useCallback((targetType) => {
        if (!targetType) return;
        navigate(`/account/${targetType}`);
        setHeader((prev) => ({...prev, title: targetType}));
    },[navigate,setHeader]);
    return {
        accountData,
        isLoading,
        error,
        header,
        handleChange,
        handleSignIn,
        handleCreate,
        handleClicks,
    };
};