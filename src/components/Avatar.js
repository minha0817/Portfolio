import React from "react";
import ModelAni from "./ModelAni";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../styles/home.css";

export const Avatar = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 10 }}
      className="home__avatar"
      style={{
        backgroundColor: "#111a21",
        width: "300px",
        height: "300px",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <ModelAni position={[0.025, -0.9, 0]} />
      <OrbitControls />
    </Canvas>
  );
};
