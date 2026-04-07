import { useState, useEffect } from 'react';

const ProgressiveImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderClassName = '',
  containerClassName = '',
  blurhash = null 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    
    // Create a new image to preload
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Placeholder/Skeleton */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer ${placeholderClassName} ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* Blurred low-quality placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
        />
      )}

      {/* Actual image */}
      <img
        src={currentSrc || src}
        alt={alt}
        className={`${className} ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
        loading="lazy"
      />
    </div>
  );
};

export default ProgressiveImage;
