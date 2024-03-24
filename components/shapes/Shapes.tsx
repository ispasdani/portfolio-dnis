"use client";

import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";

import styles from "@/components/shapes/styles.module.scss";

import Geometries from "@/components/shapes/utils/utils";

const Shapes = () => {
  return (
    <div className={styles.shapes}>
      <Canvas
        className={styles.canvasShapes}
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Shapes;
