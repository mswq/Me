import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import *  as THREE from 'three';

const Star = ({ position, route, isNavStar=false }) => {
    const meshRef = useRef();
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const baseColor = new THREE.Color('#ffcc00');
    const hoverColor = new THREE.Color('#ff9900');
    const clickColor = new THREE.Color('#ff6600');

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;

            if (isNavStar) {
                meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.1;
            }

            const targetScale = hovered ? 1.3 : clicked ? 0.9 : 1.0;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

            if (meshRef.current.material) {
                const targetColor = hovered ? hoverColor : clicked ? clickColor : baseColor;
                meshRef.current.material.color.lerp(targetColor, 0.1);
            }
        }
    });

    const handleClick = () => {
        if (route) {
            navigate(route)
        }
    }

    return (
        <mesh 
            ref={meshRef} 
            position={position}
            onClick={handleClick}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onPointerDown={() => setClicked(true)}
            onPointerUp={() => setClicked(false)}
            style={{ cursor: route ? 'pointer' : 'default' }}
            >
            <dodecahedronGeometry args={[isNavStar ? 0.8: 1, 0]} />
            <meshStandardMaterial color={baseColor} />
        </mesh>
    );
}

export default Star;