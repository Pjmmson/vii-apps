import BaseLayout from "../../layouts/BaseLayout";
import { HEADER_MENUS } from "../../config/constants/headerMenu";
import { FOOTER_MENUS } from "../../config/constants/footerMenu";
import viilogo from "../../assets/viilogo.jpeg";
import ViiAccountCaller from "./viiAccountCaller";;
import { useAccountForm } from "../../hooks/useAccountForm";

const AccountMain = () => {
    const { accountData, isLoading, handleChange, error, header, handleClicks } = useAccountForm();

    const viiAccount = <ViiAccountCaller title={header.title} accountData={accountData} handleClicks={handleClicks} handleChange={handleChange}/>
    return (
        <BaseLayout headerMenu={HEADER_MENUS} footers={FOOTER_MENUS} viilogo={viilogo} children={viiAccount}/>
    );
};
export default AccountMain;