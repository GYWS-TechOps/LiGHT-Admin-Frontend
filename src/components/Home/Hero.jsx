import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const heroSections = [
    {
      backgroundImage: '/images/Home/home-hero.webp',
      text: 'Bring LiGHT to your Campus',
      description:
        'Apply for a LiGHT Center in your college and empower your college students to be a Change Maker',
      buttonText: 'Join with us',
      buttonLink: '/join',
    },
    {
      backgroundImage: '/images/Home/hero2.webp',
      textLine1: 'Together we',
      textLine2: 'can make a difference',
      description:
        'Giving is not just about making a donation. It is about making a difference',
      buttonText: 'Donate Now',
      buttonLink: 'https://www.gyws.org/donate',
    },
  ];

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSections.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSections.length]);

  // Reset animation when slide changes
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSections.length) % heroSections.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {heroSections.map((section, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000
              ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
            style={{ backgroundImage: `url(${section.backgroundImage})` }}
          >
            <div className="flex items-center justify-center min-h-screen">
              <div className="mx-auto text-center text-white">
                {/* Title Animation - Word by Word */}
                <h2 className="text-7xl font-bold text-orange-100 mb-2 overflow-hidden pb-3 mt-[-15vh]">
                  {isActive && (
                    <>
                      {section.textLine1 ? (
                        // Multi-line text
                        <div key={`multi-${animationKey}`}>
                          <div className="mb-2">
                            {section.textLine1.split(' ').map((word, i) => (
                              <span
                                key={i}
                                className="inline-block animate-word-slide mr-4"
                                style={{ animationDelay: `${i * 0.3}s` }}
                              >
                                {word}
                              </span>
                            ))}
                          </div>
                          <div>
                            {section.textLine2.split(' ').map((word, i) => (
                              <span
                                key={i}
                                className="inline-block animate-word-slide mr-4"
                                style={{
                                  animationDelay: `${
                                    (section.textLine1.split(' ').length + i) * 0.3
                                  }s`,
                                }}
                              >
                                {word}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Single line text
                        <div key={`single-${animationKey}`}>
                          {section.text.split(' ').map((word, i) => (
                            <span
                              key={i}
                              className="inline-block animate-word-slide mr-4"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            >
                              {word}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </h2>

                {/* Description */}
                <div className="text-xl text-orange-100 pb-3 max-w-4xl mx-auto px-2">
                  {section.description}
                </div>

                {/* Button */}
                <div>
                  {section.buttonLink.startsWith('http') ? (
                    <a
                      href={section.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-2 py-1 text-lg text-white bg-[rgb(230,197,37)]
                                 hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105"
                    >
                      {section.buttonText}
                    </a>
                  ) : (
                    <Link
                      to={section.buttonLink}
                      className="inline-block px-2 py-1 text-lg text-white bg-[rgb(230,197,37)]
                                 hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105"
                    >
                      {section.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer
                   hover:text-[rgb(230,197,37)] transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        &#8249;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer
                   hover:text-[rgb(230,197,37)] transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        &#8250;
      </button>

      
    </div>
  );
};

export default Hero;
