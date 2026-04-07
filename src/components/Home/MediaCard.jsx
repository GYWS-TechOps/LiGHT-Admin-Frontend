import React from 'react';
import ProgressiveImage from '../ProgressiveImage';

const MediaCard = ({ 
  title, 
  description, 
  image, 
  date, 
  newspaper,
  className = "" 
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    : '';

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 max-w-md mx-auto overflow-hidden h-full ${className}`}>
      {/* Image Section */}
      <div className="relative">
        <ProgressiveImage 
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
          containerClassName="w-full h-56"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Header with newspaper and date */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500 font-semibold bg-gray-100 px-2 py-1 rounded">
            {newspaper}
          </span>
          <span className="text-sm text-gray-500 font-medium">
            {formattedDate}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MediaCard;