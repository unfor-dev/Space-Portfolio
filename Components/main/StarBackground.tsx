// StarsCanvas.tsx
"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import BackgroundMusic from "./BackgroundMusic";

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(4500), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 45;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [playMusic, setPlayMusic] = useState(false);

  const toggleMusic = () => {
    setPlayMusic((prev) => !prev);
  };

  return (
    <div className="w-full h-auto fixed inset-0 z-[2]">
      <button
        onClick={toggleMusic}
        className="
          absolute top-18 left-20
          px-3 py-2 z-10
          text-white cursor-pointer
          border border-[#7042f88b]
          bg-black bg-opacity-100
          rounded-md
          shadow-md
          hover:bg-opacity-100
          transition
          Welcome-box
        "
      >
        {playMusic ? "Pause Sound" : "Play Sound"}
      </button>

      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
          <Preload all />
          <BackgroundMusic play={playMusic} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
