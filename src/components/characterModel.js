// src/components/CharacterModel.js
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CharacterModel() {
  const { scene, animations } = useGLTF("/scene.glb");
  const { actions } = useAnimations(animations, scene);
  const ref = useRef();

  useEffect(() => {
    // Make the model's material transparent
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = 1; // Adjust this to make parts of the model more transparent if needed
        child.material.side = THREE.FrontSide; // Ensures only the front side is rendered
      }
    });
  }, [scene]);

  useFrame(() => {
    // Example animation handling
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  });

  return <primitive ref={ref} object={scene} scale={2} />;
}
