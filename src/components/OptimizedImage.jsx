import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, fallback, alt, className, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  // If the src prop changes, reset state
  useEffect(() => {
    setCurrentSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true);
      setCurrentSrc(fallback);
    }
  };

  return (
    <img 
      src={currentSrc} 
      onError={handleError} 
      alt={alt} 
      className={className} 
      {...props} 
    />
  );
};

export default OptimizedImage;
