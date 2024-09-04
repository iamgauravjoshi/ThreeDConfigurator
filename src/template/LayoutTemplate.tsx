import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";


function LayoutTemplate() {
    return (
        <>
            <SideNavbar />
            {/*<main>*/}
                <Outlet />
            {/*</main>*/}
        </>
    );
}

export default LayoutTemplate;
