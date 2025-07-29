// src/components/3d/Lighting.tsx
import { useRef, useEffect } from 'react'
import type { DirectionalLight } from 'three'

interface LightingProps {
  intensity?: number
  color?: string
}

export const Lighting: React.FC<LightingProps> = ({ 
  intensity = 1.5, 
  color = '#ffffff' 
}) => {
  const dirLightRef = useRef<DirectionalLight>(null)
  
  useEffect(() => {
    if (dirLightRef.current) {
      // Configure shadow camera for better shadows
      dirLightRef.current.shadow.camera.left = -10
      dirLightRef.current.shadow.camera.right = 10
      dirLightRef.current.shadow.camera.top = 10
      dirLightRef.current.shadow.camera.bottom = -10
      dirLightRef.current.shadow.camera.near = 0.1
      dirLightRef.current.shadow.camera.far = 50
    }
  }, [])
  
  return (
    <>
      {/* Ambient light - общее освещение */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Key light - основной источник света (солнце/окно) */}
      <directionalLight
        ref={dirLightRef}
        position={[8, 12, 8]}
        intensity={intensity}
        color={color}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-bias={-0.0001}
      />
      
      {/* Fill light - заполняющий свет */}
      <pointLight
        position={[-3, 4, -2]}
        intensity={0.8}
        color="#ffeedd"
        distance={12}
        decay={2}
      />
      
      {/* Accent light - акцентное освещение рабочего места */}
      <spotLight
        position={[2, 5, 2]}
        angle={Math.PI / 6}
        penumbra={0.2}
        intensity={1.2}
        color="#fff8dc"
        target-position={[0, 1, 0]}
        castShadow
      />
      
      {/* Rim light - контровый свет для объема */}
      <pointLight
        position={[0, 1, -5]}
        intensity={0.3}
        color="#4169e1"
        distance={8}
      />
    </>
  )
}