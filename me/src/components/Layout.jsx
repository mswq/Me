import { Outlet, useLocation } from "react-router-dom";
import NavStars from "./NavStars";

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <>
            {!isHome && <NavStars isHome={false} />}
            <Outlet />
        </>
    )
}

export default Layout