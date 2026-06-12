import React from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

const MagneticButton = ({ children, onClick, className }) => {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic();
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;