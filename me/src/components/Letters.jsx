import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// helvetiker_regular cut down to the glyphs in NAME - regenerate it from the full font if NAME changes
import typeface from '../assets/ashley.typeface.json';

const NAME = 'ASHLEY';
const SPACING = 4;
// Space the word needs, including the hover growth and the bobbing
const WORD_WIDTH = SPACING * (NAME.length - 1) + 6;
const WORD_HEIGHT = 6;

const LETTER_COLOR = new THREE.Color('#e36c9c');
const HOVER_COLOR = new THREE.Color('#dc3a7b');
const PRESS_COLOR = new THREE.Color('#d60e5e');

const font = new Font(typeface);
const GEOMETRIES = [...NAME].map((letter) =>
    new TextGeometry(letter, {
        font,
        size: 2.5,
        depth: 0.4,
        curveSegments: 8,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 0.6,
        bevelSegments: 20,
    }).center()
);

const Letter = ({ geometry, x, delay }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);

    useFrame(({ clock }, delta) => {
        const mesh = meshRef.current;
        const time = clock.elapsedTime;
        const ease = 1 - Math.exp(-3 * delta);

        mesh.position.y = Math.sin(time + delay) * 0.2;
        mesh.rotation.y = Math.sin(time * 0.5 + delay) * 0.1;
        mesh.rotation.z = Math.cos(time * 0.3 + delay) * 0.05;

        // Interactive Scaling
        mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, pressed ? 0.8 : hovered ? 1.5 : 1.2, ease));
        mesh.material.color.lerp(pressed ? PRESS_COLOR : hovered ? HOVER_COLOR : LETTER_COLOR, ease);
    });

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            position={[x, 0, 0]}
            scale={1.2}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => { setHovered(false); setPressed(false); }}
            onPointerDown={() => setPressed(true)}
            onPointerUp={() => setPressed(false)}
        >
            <meshStandardMaterial color={LETTER_COLOR} />
        </mesh>
    )
}

// Scales the word to fit whatever shape the screen is
const Word = () => {
    const { width, height } = useThree((state) => state.viewport);
    const scale = Math.min((width * 0.9) / WORD_WIDTH, (height * 0.3) / WORD_HEIGHT, 1.1);

    return (
        <group position={[0, height * 0.14, 0]} scale={scale}>
            {GEOMETRIES.map((geometry, index) => (
                <Letter
                    key={index}
                    geometry={geometry}
                    x={(index - (NAME.length - 1) / 2) * SPACING}
                    delay={index * 0.2}
                />
            ))}
        </group>
    )
}

const Letters = () => (
    <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
    >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Word />
    </Canvas>
)

export default Letters;
