import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei'
import *  as THREE from 'three';

const Letters = ({ position, children, delay, index }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const hoverColor = new THREE.Color('#000000ff');
    const clickColor = new THREE.Color('#000000ff');

    const colors = [
        '#e36c9c', '#e36c9c', '#e36c9c', 
        '#e36c9c', '#e36c9c', '#e36c9c'
    ];

    const letterColor = new THREE.Color(colors[index % colors.length]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;

            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
            meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.05;

            // Interactive Scaling
            const targetScale = hovered ? 1.5 : clicked ? 0.8: 1.2;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

            // Color Transitions
            if (meshRef.current.material) {
                const targetColor = hovered ? hoverColor : clicked ? clickColor : letterColor;
                meshRef.current.material.color.lerp(targetColor, 0.05)

                // // + Glow
                // meshRef.current.material.emissive.lerp(
                //     hovered ? new THREE.Color('#333333').multiplyScalar(0.1) : new THREE.Color('#000000'), 0.1
                // );
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

function Home () {    
    return (
        <div className='home-container'>
            <div>
                <h1 className='hero-title'>Hello I'm</h1>
            </div>
            <Canvas className='canvas-container' camera={{position: [0, 0, 15], fov: 60}} >
                <ambientLight intensity={0.8}/>
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
                {/* <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6a7170ff" />
                <pointLight position={[10, -10, -10]} intensity={0.5} color="#5f5454ff" /> */}

                <group position={[0, 1, 0]}>
                    <Letters position={[-10.0, 0, 0]} delay={0} index={0}>A</Letters>
                    <Letters position={[-6.0, 0, 0]} delay={0.2} index={1}>S</Letters>
                    <Letters position={[-2.0, 0, 0]} delay={0.4} index={2}>H</Letters>
                    <Letters position={[2.0, 0, 0]} delay={0.6} index={3}>L</Letters>
                    <Letters position={[6.0, 0, 0]} delay={0.8} index={4}>E</Letters>
                    <Letters position={[10.0, 0, 0]} delay={1.0} index={5}>Y</Letters>
                </group>
            </Canvas>

        </div>
    )
}

export default Home