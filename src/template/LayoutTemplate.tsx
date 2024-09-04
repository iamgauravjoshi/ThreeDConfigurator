import {Outlet} from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

function LayoutTemplate() {
    return (
        <>
            <SideNavbar/>
            <Outlet/>
        </>
    );
}

export default LayoutTemplate;
