"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import { Suspense } from "react"

function WireframeCube() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="#4FC3F7" wireframe />
      </mesh>
    </Float>
  )
}

export function HeroScene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <WireframeCube />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}

