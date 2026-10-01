import { lazy, Suspense, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// three.js loads in its own chunk so the links are usable before the shapes appear
const ShapeCanvas = lazy(() => import('./ShapeCanvas.jsx'));

const NavShapes = ({ items, labelHeight, className }) => {
    const { pathname } = useLocation();
    const [hovered, setHovered] = useState(-1);

    return (
        <nav
            className={`shape-nav ${className}`}
            style={{ '--count': items.length, '--label-height': `${labelHeight}px` }}
        >
            <Suspense fallback={null}>
                <ShapeCanvas
                    items={items}
                    hovered={hovered}
                    current={items.findIndex((item) => item.route === pathname)}
                    labelHeight={labelHeight}
                />
            </Suspense>
            {items.map((item, index) => (
                <NavLink
                    key={item.route}
                    to={item.route}
                    end
                    className="shape-link"
                    onPointerEnter={() => setHovered(index)}
                    onPointerLeave={() => setHovered(-1)}
                    onFocus={() => setHovered(index)}
                    onBlur={() => setHovered(-1)}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavShapes;
