import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Text, Center } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

import *  as THREE from 'three';

const Letters = ({ position, children, delay}) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const hoverColor = new THREE.Color('#dc3a7b');
    const clickColor = new THREE.Color('#d60e5e');

    const letterColor = new THREE.Color('#e36c9c');

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;

            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
            meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.05;

            // Interactive Scaling
            const targetScale = hovered ? 1.5 : clicked ? 0.8: 1.2;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

            if (meshRef.current.material) {
                const targetColor = hovered ? hoverColor : clicked ? clickColor : letterColor;
                meshRef.current.material.color.lerp(targetColor, 0.05)
            }
        }
    });

    return (
        <Text3D 
            ref={meshRef} 
            font="/fonts/helvetiker_regular.typeface.json" 
            size={2.5} height={0.4} 
            position={position}
            bevelEnabled={true}
            bevelThickness={0.5}
            bevelSize={0.6}
            bevelSegments={90}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            onPointerDown={() => setClicked(true)}
            onPointerUp={() => setClicked(false)}
            castShadow
            receiveShadow>

            {children}
            <meshStandardMaterial color = {letterColor} />
        </Text3D>
    )
}

const NavigationStar = ({ position, route, label }) => {
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

            const targetScale = hovered ? 1.3 : clicked ? 0.9 : 1.0;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

            if (meshRef.current.material) {
                const targetColor = hovered ? hoverColor : clicked ? clickColor : baseColor;
                meshRef.current.material.color.lerp(targetColor, 0.1);
                
                meshRef.current.material.emissive.lerp(
                    hovered ? baseColor.clone().multiplyScalar(0.2) : new THREE.Color('#000000'), 0.1
                );
            }
        }
    });

    const handleClick = () => {
        if (route) {
            navigate(route);
        }
    }

    return (
        <group>
            <mesh 
                ref={meshRef} 
                position={position}
                onClick={handleClick}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onPointerDown={() => setClicked(true)}
                onPointerUp={() => setClicked(false)}
            >
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={baseColor} />
            </mesh>
        </group>
    );
}

function Home () {    
    const [hoveredLabel, setHoveredLabel] = useState('');
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    }

    const getCameraSettings = () => {
        if (isMobile) {
            // Much further back and wider FOV for mobile
            return {
                position: [0, 0, 22],  // Even further back
                fov: 75,               // Maximum practical FOV
            };
        }
        return {
            position: [0, 0, 15],
            fov: 60,
        };
    };

    const getScaleFactor = () => {
        if (typeof window !== 'undefined') {
            const screenWidth = window.innerWidth;
            // Dynamic scaling based on actual screen width - ONLY for home page
            if (screenWidth <= 480) {
                return 0.5; // Very small screens
            } else if (screenWidth <= 768) {
                return 0.7; // Mobile screens
            } else if (screenWidth <= 1024) {
                return 0.8; // Tablet screens
            }
        }
        return 1.0; // Desktop
    };

    const getLetterPosition = () => {
        return isMobile ? [0, 4, 0] : [0, 1.25, 0]; // Only move up on mobile
    };

    const getStarYPosition = () => {
        return isMobile ? -7: -2.2; // Only move down on mobile
    };

    const cameraSettings = getCameraSettings();
    const scaleFactor = getScaleFactor();
    const letterPosition = getLetterPosition();
    const starY = getStarYPosition();

    return (
        <div className='home-container'>
            <div>
                <h1 className='hero-title'>Hello I'm</h1>
            </div>

            <div className="hero-subtitle">
                Hover over the shapes to explore
            </div>

            {hoveredLabel && (
                <div className='hovered-text' style={{
                    position: 'fixed',
                    left: mousePosition.x + 15,
                    top: mousePosition.y - 30,
                }}>
                    {hoveredLabel}
                </div>
            )}
            <Canvas className='canvas-container' 
                camera={cameraSettings} 
                onPointerMove={handleMouseMove} 
                style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                }}
                gl={{
                    antialias: true,
                    alpha: true,
                }}>
                <ambientLight intensity={0.8}/>
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6a7170ff" />
                <pointLight position={[10, -10, -10]} intensity={0.5} color="#5f5454ff" />

                <group position={letterPosition} scale={[scaleFactor, scaleFactor, scaleFactor]}>
                    <Letters position={[-10.0, 0, 0]} delay={0}>A</Letters>
                    <Letters position={[-6.0, 0, 0]} delay={0.2}>S</Letters>
                    <Letters position={[-2.0, 0, 0]} delay={0.4}>H</Letters>
                    <Letters position={[2.0, 0, 0]} delay={0.6}>L</Letters>
                    <Letters position={[6.0, 0, 0]} delay={0.8}>E</Letters>
                    <Letters position={[10.0, 0, 0]} delay={1.0}>Y</Letters>
                </group>
                <group scale={[scaleFactor, scaleFactor, scaleFactor]}>
                    <group 
                        onPointerEnter={() => setHoveredLabel('Experience')}
                        onPointerLeave={() => setHoveredLabel('')}
                    >
                        <NavigationStar position={[-4, starY, 8]} route="/experience" label="Experience"/>
                    </group>
                    <group 
                        onPointerEnter={() => setHoveredLabel('About Me')}
                        onPointerLeave={() => setHoveredLabel('')}
                    >
                        <NavigationStar position={[0, starY, 8]} route="/aboutme" label="About Me" />
                    </group>
                    <group 
                        onPointerEnter={() => setHoveredLabel('Projects')}
                        onPointerLeave={() => setHoveredLabel('')}
                    >
                        <NavigationStar position={[4, starY, 8]} route="/projects" label="Projects" />
                    </group>
                </group>
            </Canvas>

        </div>
    )
}

export default Home