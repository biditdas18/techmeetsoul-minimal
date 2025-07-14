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
      const createMeteor = (xOffset = 0, angleOffset = 0) => ({
        x: Math.random() * width, // Fully random x across sky
        y: -40,
        speed: 4,
        length: 100,
        angle: Math.PI / 4 + angleOffset,
        opacity: 1,
        life: 0,
        maxLife: 120,
        width: 2
      });

      meteors.push(createMeteor());

      if (Math.random() < 0.1) {
        meteors.push(createMeteor(Math.random() * 50 - 25, (Math.random() - 0.5) * 0.2));
      }

      if (meteors.length > 3) meteors.splice(0, meteors.length - 3);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      meteors.forEach((m, index) => {
        const progress = m.life / m.maxLife;
        const fadeOpacity = Math.max(0, m.opacity * (1 - progress));
        const fadeLength = m.length * (1 - progress * 0.5);

        const dx = Math.cos(m.angle) * fadeLength;
        const dy = Math.sin(m.angle) * fadeLength;

        const tailX = m.x - dx;
        const tailY = m.y - dy;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${fadeOpacity})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glow near head
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${fadeOpacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(255,255,255,${fadeOpacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.life++;

        if (m.life > m.maxLife || m.y > height * 0.6 || fadeOpacity <= 0) {
          meteors.splice(index, 1);
        }
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