import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [theme, setTheme] = useState('dark');

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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    // Helper to traverse DOM and find the actual computed background color
    const getActualBg = (el) => {
      while (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        // Ignore transparent or effectively transparent backgrounds
        if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          return bg;
        }
        el = el.parentElement;
      }
      return 'rgb(0, 0, 0)'; // Default to black
    };

    // Helper to categorize RGB into our 3 brand themes
    const categorizeColor = (rgbString) => {
      const match = rgbString.match(/\d+/g);
      if (!match) return 'dark';
      
      const [r, g, b] = match.map(Number);
      
      // Detect Brand Red (e.g., #D90429 is 217, 4, 41)
      if (r > 150 && g < 80 && b < 80) return 'red';
      
      // Standard luminance calculation
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      if (brightness > 128) return 'light';
      return 'dark';
    };

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Debounce the heavy DOM color calculation using requestAnimationFrame
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        // Find the topmost element strictly under the cursor
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
          const bg = getActualBg(el);
          setTheme(categorizeColor(bg));
        }
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, .interactive, .view-target, .join-target');
      setIsHovering(!!isInteractive);
      
      // Dynamic text based on target
      if (target.closest('.view-target')) setCursorText("VIEW");
      else if (target.closest('.join-target')) setCursorText("JOIN");
      else if (isInteractive) setCursorText("CLICK");
      else setCursorText("");
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  const getColors = () => {
    switch(theme) {
      case 'light': // Over White background
        return {
          idleBorder: "rgba(179, 0, 12, 1)",    // Red ring
          hoverBg: "rgba(179, 0, 12, 1)",       // Red fill
          hoverBorder: "rgba(179, 0, 12, 1)",
          text: "rgba(255, 255, 255, 1)"        // White text
        };
      case 'red': // Over Red background/button
        return {
          idleBorder: "rgba(0, 0, 0, 1)",       // Black ring
          hoverBg: "rgba(0, 0, 0, 1)",          // Black fill
          hoverBorder: "rgba(0, 0, 0, 1)",
          text: "rgba(255, 255, 255, 1)"        // White text
        };
      case 'dark': // Over Black background/button
      default:
        return {
          idleBorder: "rgba(255, 255, 255, 1)", // White ring
          hoverBg: "rgba(255, 255, 255, 1)",    // White fill
          hoverBorder: "rgba(255, 255, 255, 1)",
          text: "rgba(0, 0, 0, 1)"              // Black text
        };
    }
  };

  const colors = getColors();

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[10000] flex items-center justify-center transition-colors duration-200"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? colors.hoverBg : "rgba(0, 0, 0, 0)",
        borderColor: isHovering ? colors.hoverBorder : colors.idleBorder,
      }}
    >
      {isHovering && cursorText && (
        <span 
          className="text-[6px] font-condensed font-bold uppercase tracking-tighter"
          style={{ color: colors.text }}
        >
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;