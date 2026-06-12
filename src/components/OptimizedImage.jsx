import { useState } from 'react';

const OptimizedImage = ({ src, fallback, alt, className, ...props }) => {
  const [hasFailed, setHasFailed] = useState(false);

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true);
    }
  };

  const currentSrc = hasFailed ? fallback : src;

  return (
    <img
      key={src}
      src={currentSrc}
      onError={handleError}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;
