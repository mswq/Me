import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const BASE_COLOR = new THREE.Color('#ffcc00');
const HOVER_COLOR = new THREE.Color('#ff9900');
const CURRENT_COLOR = new THREE.Color('#e36c9c');

const merge = (...parts) => mergeGeometries(parts.map((part) => (part.index ? part.toNonIndexed() : part)));

// Every icon is two primitives, so it still reads at the size of the header nav
function house() {
    const walls = new THREE.BoxGeometry(1.3, 0.9, 1.3).translate(0, -0.5, 0);
    const roof = new THREE.ConeGeometry(1.2, 0.85, 4).rotateY(Math.PI / 4).translate(0, 0.375, 0);
    return merge(walls, roof);
}

function briefcase() {
    const body = new THREE.BoxGeometry(1.8, 1.15, 0.6).translate(0, -0.2, 0);
    const handle = new THREE.TorusGeometry(0.3, 0.07, 6, 10, Math.PI).translate(0, 0.375, 0);
    return merge(body, handle);
}

function person() {
    const head = new THREE.IcosahedronGeometry(0.45, 1).translate(0, 0.55, 0);
    const body = new THREE.CylinderGeometry(0.3, 0.8, 1, 12).translate(0, -0.5, 0);
    return merge(head, body);
}

function bulb() {
    const glass = new THREE.IcosahedronGeometry(0.75, 1).translate(0, 0.25, 0);
    const base = new THREE.CylinderGeometry(0.36, 0.3, 0.5, 10).translate(0, -0.7, 0);
    return merge(glass, base);
}

// Each icon is about 2 units across, so one scale fits them all
const GEOMETRIES = { house: house(), briefcase: briefcase(), person: person(), bulb: bulb() };

const NavShape = ({ shape, index, x, y, size, hovered, current }) => {
    const meshRef = useRef();

    useFrame(({ clock }, delta) => {
        const mesh = meshRef.current;
        const time = clock.elapsedTime + index * 1.7;
        const ease = 1 - Math.exp(-8 * delta);

        // Sway rather than tumble so the icon stays readable
        mesh.rotation.x = 0.25;
        mesh.rotation.y = Math.sin(time * 0.7) * 0.6;
        mesh.position.y = y + Math.sin(time * 0.9) * size * 0.05;

        mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, hovered ? size * 1.2 : size, ease));
        mesh.material.color.lerp(hovered ? HOVER_COLOR : current ? CURRENT_COLOR : BASE_COLOR, ease);
    });

    return (
        <mesh ref={meshRef} geometry={GEOMETRIES[shape]} position={[x, y, 0]} scale={size}>
            <meshStandardMaterial color={BASE_COLOR} flatShading />
        </mesh>
    );
}

// Lays the shapes out in equal columns, matching the grid of links drawn over the canvas
const ShapeRow = ({ items, hovered, current, labelHeight }) => {
    const viewport = useThree((state) => state.viewport);
    const canvasHeight = useThree((state) => state.size.height);

    const label = (labelHeight / canvasHeight) * viewport.height;
    const cellWidth = viewport.width / items.length;
    const size = Math.min(cellWidth, viewport.height - label) * 0.38;

    return items.map((item, index) => (
        <NavShape
            key={item.route}
            shape={item.shape}
            index={index}
            x={(index + 0.5 - items.length / 2) * cellWidth}
            y={label / 2}
            size={size}
            hovered={index === hovered}
            current={index === current}
        />
    ));
}

const ShapeCanvas = (props) => (
    <Canvas
        camera={{ position: [0, 0, 10], fov: 20 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        aria-hidden="true"
    >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <ShapeRow {...props} />
    </Canvas>
)

export default ShapeCanvas;
