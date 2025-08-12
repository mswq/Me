import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    return (
        <>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutme" className={`nav-link ${location.pathname === '/aboutme' ? 'active' : ''}`}>About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout