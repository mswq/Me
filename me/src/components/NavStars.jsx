import React from "react";
import { Canvas } from "@react-three/fiber";
import Star from "./Star.jsx";

const NavStars = () => {
    const starData = [
        { route: "/",  label: "Home" },
        // { route: "/experience", label: "Experience" },
        // { route: "/aboutme", label: "About" },
        // { route: "/projects", label: "Projects" }
        
    ];

    // const navPositions = [[-4 , 0, 1.5], [-2, 0, 1.5], [0, 0, 1.5], [2, 0, 1.5]];
    const navPositions = [[0, 0, 7]]

    return (
        <Canvas className="canvas-container" camera={{ position: [0, 0, 10], fov: 50 }}
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