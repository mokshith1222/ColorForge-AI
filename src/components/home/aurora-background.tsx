'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AuroraBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-40 animate-aurora mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, var(--primary), transparent 50%), radial-gradient(circle at 80% 20%, var(--accent), transparent 50%), radial-gradient(circle at 20% 80%, var(--secondary), transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-primary/20 blur-3xl mix-blend-screen"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-accent/20 blur-3xl mix-blend-screen"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Mouse Reactive Glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-secondary/10 blur-3xl mix-blend-screen transition-transform duration-75 ease-out"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
      
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[50px] mask-image-radial-gradient" />
    </div>
  );
}
