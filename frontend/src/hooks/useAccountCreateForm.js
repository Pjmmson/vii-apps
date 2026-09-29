import { useCallback, useState } from "react";
import MONTHS from "../config/constants/months";
export function useAccountCreateForm () {
    const [ createAccData, setCreateAccData ] = useState({
        firstName:  '',
        lastName: '',
        country: '',
        birthDate: '',
        career: '',
        email: '',
        password: '',
        confirmPassword: '',
        countryCode: '',
        phone: '',
        address: '',
    });
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setCreateAccData((prev) => ({...prev, [name]: value}));
    },[setCreateAccData]);
    const handleCreate = () => {};
    return {
        createAccData,
        MONTHS,
        isLoading,
        error,
        handleChange,
        handleCreate,
    };
};