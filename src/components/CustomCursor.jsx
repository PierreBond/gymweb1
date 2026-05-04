import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a premium feel
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, .interactive, .view-target, .join-target');
      setIsHovering(!!isInteractive);
      
      // Dynamic text based on target
      if (target.closest('.view-target')) setCursorText("VIEW");
      else if (target.closest('.join-target')) setCursorText("JOIN");
      else setCursorText("");
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary-container pointer-events-none z-[10000] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(217, 4, 41, 1)" : "rgba(217, 4, 41, 0)",
        borderColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(217, 4, 41, 1)",
      }}
    >
      {isHovering && cursorText && (
        <span className="text-[6px] font-condensed font-bold text-white uppercase tracking-tighter">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
