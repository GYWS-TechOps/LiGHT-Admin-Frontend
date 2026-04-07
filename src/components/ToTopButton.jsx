import React, { useState, useEffect } from 'react';

const ToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 w-12 h-12 bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] z-50  rounded-full text-white font-bold text-lg shadow-lg transition-all duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
};

export default ToTopButton;
