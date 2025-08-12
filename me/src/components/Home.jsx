import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei'

const Letters = ({ position, color, children, delay }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;

            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
            meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.05;
        }
    });

    return (
        <Text ref={meshRef} position={position} fontsize={1.2} color={color} anchorX="center" anchorY="middle">
            {children}
        </Text>
    )
}

function Home () {    
    return (
        <div className='home-container'>
            <div>
                <h1 className='hero-title'>MSWQ</h1>
            </div>
            <Canvas className='canvas-container' camera={{position: [0, 0, 8], fov: 60}} >
                <ambientLight intensity={0.8}/>
                <Letters position={[-3.2, 0, 0]} color={'#96ceb4'} delay={1}>M</Letters>
                <Letters position={[-1.6, 0, 0]} color={'#96ceb4'} delay={0.5}>S</Letters>
                <Letters position={[0, 0, 0]} color={'#96ceb4'} delay={1}>W</Letters>
                <Letters position={[1.6, 0, 0]} color={'#96ceb4'} delay={0.5}>Q</Letters>
                <Letters position={[3.2, 0, 0]} color={'#96ceb4'} delay={1}>!</Letters>
            </Canvas>

        </div>
    )
}

export default Home