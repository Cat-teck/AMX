"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

function Stars() {
  const points = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x += 0.0001
      points.current.rotation.y += 0.0001
    }
  })

  const particlesCount = 5000
  const positions = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2000
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2000
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={2} sizeAttenuation color="#4FC3F7" />
    </points>
  )
}

export function StarfieldCanvas() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}

