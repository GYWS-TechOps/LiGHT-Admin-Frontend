import React from 'react';
import ProgressiveImage from '../ProgressiveImage';

const EventsCard = ({ 
  image, 
  title, 
  metrics = [], 
  description, 
  variant = 'solid',
  className = '' 
}) => {
  const borderClass = variant === 'dashed' ? 'border-dashed' : 'border-solid';
  
  return (
    <div className={`
      bg-white rounded-3xl border-4 border-yellow-400 ${borderClass}
      overflow-hidden shadow-lg hover:shadow-xl 
      hover:-translate-y-2 transition-all duration-300 mb-2
      w-full max-w-2xl mx-auto my-4 ${className}
      flex flex-col md:flex-row
    `}>
      {/* Image Section - Left side on desktop */}
      <div className="w-full md:w-1/2 max-h-80 md:h-auto overflow-hidden flex-shrink-0">
        <ProgressiveImage 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center"
          containerClassName="w-full h-full"
        />
      </div>
      
      {/* Content Section - Right side on desktop */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        {/* Title */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
            {title}
          </h3>
          
          {/* Metrics */}
          {metrics.length > 0 && (
            <div className="mb-4 space-y-3">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-5 h-5 bg-yellow-400 rounded-sm mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Metric Content */}
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase font-medium tracking-wider mb-1">
                      {metric.label}
                    </div>
                    <div className="text-base font-semibold text-gray-800">
                      {metric.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Description - Always at bottom */}
        <p className="text-gray-600 leading-relaxed text-sm mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
