import React, {useState, useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import Star from "./Star.jsx";

const NavStars = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getCameraSettings = () => {
        if (isMobile) {
            // Much further back and wider FOV for mobile
            return {
                position: [0, 0, 12],  // Even further back
                fov: 60,               // Maximum practical FOV
            };
        }
        return {
            position: [0, 0, 10],
            fov: 60,
        };
    };

    const starData = [
        { route: "/",  label: "Home" },
        // { route: "/experience", label: "Experience" },
        // { route: "/aboutme", label: "About" },
        // { route: "/projects", label: "Projects" }
        
    ];

    // const navPositions = [[-4 , 0, 1.5], [-2, 0, 1.5], [0, 0, 1.5], [2, 0, 1.5]];
    const navPositions = isMobile ? [[1.5, 1, 6]]:[[0, 0, 7]]

    return (
        <Canvas className="canvas-container" camera={getCameraSettings()}
            style={{ 
                    position: 'fixed',
                    top:  '8px',
                    right:  '10px',
                    width: '200px',
                    height: '150px',
                    zIndex: 1000
                }}
            >
            <ambientLight intensity={0.6}/>
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
            
            
            {starData.map((star, index) => (
                <Star 
                    key={star.label} 
                    position={navPositions[index]} 
                    route={star.route} 
                    isNavStar={true}
                />
            ))}

        </Canvas>
    )
}

export default NavStars;