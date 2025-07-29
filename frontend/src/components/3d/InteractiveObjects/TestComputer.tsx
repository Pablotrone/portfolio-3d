import { InteractiveBase } from './InteractiveBase'

interface TestComputerProps {
  onInteractionCount?: (count: number) => void
}

export const TestComputer: React.FC<TestComputerProps> = ({ onInteractionCount }) => {
  let interactionCount = 0
  
  const handleClick = () => {
    interactionCount++
    console.log(`Computer clicked ${interactionCount} times!`)
    onInteractionCount?.(interactionCount)
    // alert(`Computer clicked! 🖥️ (${interactionCount} times)`) //
  }
  
  return (
    <InteractiveBase
      position={[2, 0.5, -1]}
      onClick={handleClick}
      normalColor="#2c3e50"
      hoverColor="#3498db"
      name="Test Computer"
    >
      {/* Simple computer representation */}
      <boxGeometry args={[1.2, 0.8, 0.1]} />
    </InteractiveBase>
  )
}