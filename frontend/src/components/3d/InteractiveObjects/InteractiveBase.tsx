import { useRef, useState, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import type { ThreeEvent } from '@react-three/fiber'

interface InteractiveBaseProps {
  position?: [number, number, number]
  children: React.ReactNode
  onClick?: () => void
  hoverColor?: string
  normalColor?: string
  name?: string
}

export const InteractiveBase: React.FC<InteractiveBaseProps> = ({
  position = [0, 0, 0],
  children,
  onClick,
  hoverColor = '#ff6b6b',
  normalColor = '#4ecdc4',
  name = 'Interactive Object'
}) => {
  const meshRef = useRef<Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  
  // Smooth hover animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetScale = isHovered ? 1.1 : 1
      const currentScale = meshRef.current.scale.x
      const newScale = currentScale + (targetScale - currentScale) * delta * 8
      meshRef.current.scale.setScalar(newScale)
      
      // Subtle floating animation
      const time = state.clock.getElapsedTime()
      meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.05
    }
  })
  
  const handleClick = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 2000)
    console.log(`${name} clicked!`)
    onClick?.()
  }, [onClick, name])
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerEnter={(e) => {
        e.stopPropagation()
        setIsHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerLeave={(e) => {
        e.stopPropagation()
        setIsHovered(false)
        document.body.style.cursor = 'default'
      }}
      castShadow
      receiveShadow
    >
      {children}
      <meshStandardMaterial 
        color={isHovered ? hoverColor : normalColor}
        emissive={isClicked ? '#222222' : '#000000'}
        emissiveIntensity={isClicked ? 0.3 : 0}
        roughness={3}
        metalness={2}
      />
    </mesh>
  )
}