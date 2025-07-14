import React, { useEffect, useRef } from 'react';

const MeteorCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const meteors = [];

    function spawnMeteor() {
      const x = Math.random() * width;
      meteors.push({
        x,
        y: -20,
        length: 80,
        speed: 2 + Math.random() * 2,
        angle: Math.PI / 4,
        opacity: 0.7
      });

      // Limit 1 meteor
      if (meteors.length > 1) meteors.shift();
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      meteors.forEach((m) => {
        const dx = Math.cos(m.angle) * m.length;
        const dy = Math.sin(m.angle) * m.length;
        const grad = ctx.createLinearGradient(m.x, m.y, m.x + dx, m.y + dy);
        grad.addColorStop(0, `rgba(255,255,255,${m.opacity})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + dx, m.y + dy);
        ctx.stroke();

        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
      });
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(spawnMeteor, 10000);
    draw();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default MeteorCanvas;

