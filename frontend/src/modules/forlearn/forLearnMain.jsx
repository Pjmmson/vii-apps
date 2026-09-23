import BaseLayout from "../../layouts/BaseLayout";
import { HEADER_MENUS } from "../../config/constants/headerMenu";
import { FOOTER_MENUS } from "../../config/constants/footerMenu";
import viilogo from "../../assets/viilogo.jpeg";
const ForLearnMain = () => {
    return (
        <BaseLayout headerMenu={HEADER_MENUS} footers={FOOTER_MENUS} viilogo={viilogo} children={["For a learn Page"]}/>
    );
};
export default ForLearnMain;