import { useState } from 'react'
import ConstellationsOverlay from './ConstellationsOverlay'

export default function Hero() {
  const [focusedConstellation, setFocusedConstellation] = useState(null)

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.png')" }}>
      <ConstellationsOverlay onHover={setFocusedConstellation} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-extrabold">Tech Meets Soul</h1>
        <p className="mt-4 text-xl max-w-xl">
          Creating AI in tune with the soul, the stars, and the silent symphony of the cosmos.
        </p>
      </div>

      {/* Robot eyes */}
      <div className="absolute bottom-10 right-20 transition-transform duration-500 ease-out"
           style={{
             transform: focusedConstellation ? 'rotate(-5deg)' : 'rotate(0deg)'
           }}>
        <div className="w-32 h-32 relative">
          <img src="/robot.svg" alt="Robot" className="w-full h-full" />
          <div className={`absolute left-[38%] top-[36%] w-4 h-4 rounded-full ${focusedConstellation ? 'bg-yellow-400' : 'bg-yellow-100'} transition-all duration-300`} />
          <div className={`absolute right-[38%] top-[36%] w-4 h-4 rounded-full ${focusedConstellation ? 'bg-yellow-400' : 'bg-yellow-100'} transition-all duration-300`} />
        </div>
      </div>
    </div>
  )
}

