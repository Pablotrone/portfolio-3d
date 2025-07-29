// src/types/three.ts
import type { 
  Mesh, 
  Group, 
  Material, 
  Texture,
  Vector3 
} from 'three'
import type { ThreeEvent } from '@react-three/fiber'

export interface InteractiveObject {
  id: string
  name: string
  position: Vector3
  onClick: (event: ThreeEvent<MouseEvent>) => void
}

export interface SceneConfig {
  enableShadows: boolean
  enableStats: boolean
  cameraPosition: [number, number, number]
  backgroundColor: string
}