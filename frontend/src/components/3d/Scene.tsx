import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Room } from './Room'
import { Lighting } from './Lighting'
import { TestComputer } from './InteractiveObjects/TestComputer'

function TestCube({ color, scale }: { color: string, scale: number }) {
  return (
    <mesh castShadow scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export const Scene: React.FC = () => {
  // Состояние для куба
  const [color, setColor] = useState('#ff69b4')
  const [scale, setScale] = useState(1)
  
  // Состояние для освещения
  const [lightIntensity, setLightIntensity] = useState(1.5)
  const [lightColor, setLightColor] = useState('#ffffff')
  
  return (
    <div className="w-full h-screen">
      {/* РАСШИРЕННАЯ DEBUG ПАНЕЛЬ */}
      <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm p-4 rounded-lg text-white z-50 shadow-xl border border-gray-700 min-w-[280px]">
        <h3 className="mb-3 font-bold text-green-400">🔧 Scene Controls</h3>
        
        {/* Cube Controls */}
        <div className="mb-4 p-3 bg-gray-800 rounded">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">Cube Settings</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-xs text-gray-300 mb-1">Color:</label>
              <input 
                type="color" 
                value={color}
                onChange={e => setColor(e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-1">Scale: {scale}</label>
              <input 
                type="range" 
                min="0.5" 
                max="2" 
                step="0.1"
                value={scale}
                onChange={e => setScale(parseFloat(e.target.value))}
                className="w-full accent-blue-400"
              />
            </div>
          </div>
        </div>
        
        {/* Lighting Controls */}
        <div className="p-3 bg-gray-800 rounded">
          <h4 className="text-sm font-semibold text-yellow-400 mb-2">Lighting</h4>
          <div className="space-y-2">
            <div>
              <label className="block text-xs text-gray-300 mb-1">Intensity: {lightIntensity}</label>
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="0.1"
                value={lightIntensity}
                onChange={e => setLightIntensity(parseFloat(e.target.value))}
                className="w-full accent-yellow-400"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-1">Color:</label>
              <input 
                type="color" 
                value={lightColor}
                onChange={e => setLightColor(e.target.value)}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Canvas
        camera={{ 
          position: [6, 4, 6], 
          fov: 60 
        }}
        shadows
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          <Lighting intensity={lightIntensity} color={lightColor} />
          <Room />
          <TestCube color={color} scale={scale} />
          <TestComputer />
        </Suspense>
        
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2}
        />
        <Stats />
      </Canvas>
    </div>
  )
}