import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

export default function GothicScene() {
  return (
    <Canvas className="absolute inset-0">
      {/* Lighting for the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1.2} />

      {/* Prevent rendering issues */}
      <Suspense fallback={null}>
        {/* 🌫️ Gothic Elements (Bats Removed) */}
        <RollingFog />
        <BloodMoon />
        <FloatingCandles />
      </Suspense>
    </Canvas>
  );
}

/* 🌫️ Rolling Fog */
function RollingFog() {
  const fogRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (fogRef.current) {
      fogRef.current.position.x += 0.005; // Slow horizontal movement
    }
  });

  return (
    <mesh ref={fogRef} position={[0, 0, -5]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="gray" transparent opacity={0.2} />
    </mesh>
  );
}

/* 🌕 Blood Moon */
function BloodMoon() {
  const moonRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002; // Slow rotation for realism
    }
  });

  return (
    <mesh ref={moonRef} position={[2, 3, -5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="darkred" />
    </mesh>
  );
}

/* 🕯️ Floating Candles */
function FloatingCandles() {
  const candleRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (candleRef.current) {
      candleRef.current.position.y += Math.sin(Date.now() * 0.002) * 0.005; // Floating effect
    }
  });

  return (
    <mesh ref={candleRef} position={[-2, 1, -3]}>
      <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
