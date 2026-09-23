import BaseLayout from "../../layouts/BaseLayout";
import { HEADER_MENUS } from "../../config/constants/headerMenu";
import { FOOTER_MENUS } from "../../config/constants/footerMenu";
import viilogo from "../../assets/viilogo.jpeg";
import { getViiAccounts, createViiAccount, updateViiAccount, deleteViiAccount } from "../../config/services/api/viiAccountService";
import { useEffect, useState } from "react";
import ViiAccountLists from "./viiAccountLists";

const AccountMain = () => {
    const [ viiAccounts, setViiAccounts ] = useState([]);
    const [ accName, setAccName ] = useState("");
    const [ error, setError ] = useState("");

    useEffect(() => {
        const loadViiAccounts = async () => {
            try {
                console.log("Trying to get Vii account lists ....");
                const response = await getViiAccounts();
                console.log("Full Axios Response:", response);
                // Extract array from response.data.data (if wrapped) or response.data
                const accountsData = response.data?.data || response.data;
                
                setViiAccounts(Array.isArray(accountsData) ? accountsData : []);
            } catch (error) {
                setError(error);
                console.error("Error in Vii account loading: ", error);
            }
        };  
        loadViiAccounts();
    }, []);

    // Logs on every render: will show [] on initial mount, then updated array after fetch completes
    console.log("acc lists:", viiAccounts);
    const accListName = <ViiAccountLists accLists={viiAccounts}/>
    return (
        <div>
            <BaseLayout headerMenu={HEADER_MENUS} footers={FOOTER_MENUS} viilogo={viilogo} children={accListName}/>
        </div>
    );
};
export default AccountMain;