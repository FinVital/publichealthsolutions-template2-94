
import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial resize
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Create bubbles
    const bubbleColors = [
      'rgba(211, 228, 253, 0.6)', // soft blue
      'rgba(242, 252, 226, 0.6)', // soft green
      'rgba(253, 225, 211, 0.6)', // soft peach
      'rgba(229, 222, 255, 0.6)', // soft purple
      'rgba(100, 185, 176, 0.4)', // teal with lower opacity
    ];
    
    const bubbles: Bubble[] = [];
    const bubbleCount = Math.min(15, Math.floor(window.innerWidth / 100));
    
    for (let i = 0; i < bubbleCount; i++) {
      const radius = Math.random() * 50 + 30; // Random size between 30-80px
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: radius,
        color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
        speedX: (Math.random() - 0.5) * 0.5, // Slow horizontal movement
        speedY: (Math.random() - 0.5) * 0.5, // Slow vertical movement
        opacity: Math.random() * 0.4 + 0.2, // Random opacity between 0.2-0.6
      });
    }
    
    // Animation loop
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw bubbles
      bubbles.forEach(bubble => {
        // Move bubble
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        
        // Bounce off edges
        if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > canvas.width) {
          bubble.speedX = -bubble.speedX;
        }
        
        if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > canvas.height) {
          bubble.speedY = -bubble.speedY;
        }
        
        // Draw bubble
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, bubble.radius
        );
        
        gradient.addColorStop(0, bubble.color.replace(')', ', ' + bubble.opacity + ')'));
        gradient.addColorStop(1, bubble.color.replace(')', ', 0)'));
        
        ctx.fillStyle = gradient;
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ WebkitBackdropFilter: 'blur(120px)', backdropFilter: 'blur(120px)' }}
    />
  );
};

export default BackgroundAnimation;
