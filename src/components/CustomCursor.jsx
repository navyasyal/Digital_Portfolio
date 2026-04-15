import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    const interactables = document.querySelectorAll('a, button, [role="button"], .interactive');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-green/30 pointer-events-none z-[100] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#00f5ff' : '#00ff41',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-neon-green rounded-full shadow-[0_0_10px_#00ff41]" />
        
        {/* Reticle lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-neon-green/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-neon-green/40" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-neon-green/40" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-neon-green/40" />
      </motion.div>
      
      {/* Lagging trailing glow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-green/20 blur-[2px] rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 200, mass: 1 }}
      />
    </>
  );
}
