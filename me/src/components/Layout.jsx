import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavShapes from "./NavShapes";
import { NAV_ITEMS } from "../navItems.js";

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {pathname !== "/" && (
                <header className="site-header">
                    <NavShapes items={NAV_ITEMS} labelHeight={20} className="site-nav" />
                </header>
            )}
            <Outlet />
        </>
    )
}

export default Layout
