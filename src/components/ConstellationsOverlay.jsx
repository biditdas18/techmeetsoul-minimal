import React from 'react'
import './ConstellationsOverlay.css'

const constellations = [
  { id: 'const1', cx: '30%', cy: '20%' },
  { id: 'const2', cx: '65%', cy: '15%' },
  { id: 'const3', cx: '80%', cy: '25%' },
  // Add more constellations with approximate positions
]

const ConstellationsOverlay = ({ onHover }) => {
  return (
    <div className="constellation-overlay">
      {constellations.map(({ id, cx, cy }) => (
        <div
          key={id}
          className="constellation-node"
          style={{ left: cx, top: cy }}
          onMouseEnter={() => onHover(id)}
          onMouseLeave={() => onHover(null)}
        />
      ))}
    </div>
  )
}

export default ConstellationsOverlay

