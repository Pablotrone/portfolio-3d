// src/components/3d/Scene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Suspense, useState } from 'react'

function TestCube({ color, scale }: { color: string, scale: number }) {
  return (
    <mesh castShadow scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export const Scene: React.FC = () => {
  const [color, setColor] = useState('#ff69b4')
  const [scale, setScale] = useState(1)
  
  return (
    <div className="w-full h-screen">
      {/* ПРОСТАЯ РАБОЧАЯ ПАНЕЛЬ */}
      <div className="fixed top-4 right-4 bg-black/90 p-4 rounded-lg text-white z-50">
        <h3 className="mb-3 font-bold">🔧 Controls</h3>
        <div className="space-y-2">
          <div>
            <label className="block text-sm">Color:</label>
            <input 
              type="color" 
              value={color}
              onChange={e => setColor(e.target.value)}
              className="w-full h-8"
            />
          </div>
          <div>
            <label className="block text-sm">Scale: {scale}</label>
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.1"
              value={scale}
              onChange={e => setScale(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <Canvas 
        camera={{ position: [5, 5, 5], fov: 75 }}
        shadows
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <TestCube color={color} scale={scale} />
        </Suspense>
        
        <OrbitControls enableDamping dampingFactor={0.05} />
        <Stats />
        
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
      </Canvas>
    </div>
  )
}