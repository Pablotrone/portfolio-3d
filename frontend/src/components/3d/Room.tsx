import { useRef } from 'react'
import type { Group } from 'three'

export const Room: React.FC = () => {
  const groupRef = useRef<Group>(null)
  
  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]} 
        receiveShadow
      >
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Back wall */}
      <mesh position={[0, 2, -3]} receiveShadow>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* Left wall */}
      <mesh 
        position={[-4, 2, 0]} 
        rotation={[0, Math.PI / 2, 0]} 
        receiveShadow
      >
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* Right wall */}
      <mesh 
        position={[4, 2, 0]} 
        rotation={[0, -Math.PI / 2, 0]} 
        receiveShadow
      >
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* Ceiling (optional) */}
      <mesh 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[0, 4, 0]}
      >
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.9} />
      </mesh>
    </group>
  )
}