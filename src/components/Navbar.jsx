import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img src="/images/Home/logo.webp" alt="LiGHT Logo" className="h-13 w-auto" />
            <Link to="/" className="text-2xl font-bold hidden sm:block hover:text-[rgb(230,197,37)] transition-colors duration-300">
              LiGHT
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${
                isActive("/") ? "text-[rgb(230,197,37)] font-semibold" : "hover:text-gray-300"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-300 ${
                isActive("/about") ? "text-[rgb(230,197,37)] font-semibold" : "hover:text-gray-300"
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/centers" 
              className={`transition-colors duration-300 ${
                isActive("/centers") ? "text-[rgb(230,197,37)] font-semibold" : "hover:text-gray-300"
              }`}
            >
              Centers
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-300 ${
                isActive("/contact") ? "text-[rgb(230,197,37)] font-semibold" : "hover:text-gray-300"
              }`}
            >
              Contact Us
            </Link>
            <Link 
              to="/initiatives" 
              className={`transition-colors duration-300 ${
                isActive("/initiatives") ? "text-[rgb(230,197,37)] font-semibold" : "hover:text-gray-300"
              }`}
            >
              Initiatives
            </Link>
            <Link 
              to="/join" 
              className={`transition-colors duration-300 ${
                isActive("/join") ? "text-[rgb(230,197,37)] font-semibold" : "hover:text-gray-300"
              }`}
            >
              Join Us
            </Link>
            <Link 
              to="/members" 
              className={`transition-colors duration-300 ${
                isActive("/members") ? "text-[rgb(230,197,37)] font-semibold" : "hover:text-gray-300"
              }`}
            >
              Members
            </Link>
            <a 
              href="https://www.gyws.org/donate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block -mt-0.5 px-2 pb-1 pt-0.1 text-lg text-black bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button & Donate Button */}
          <div className="lg:hidden flex items-center">
            <a 
              href="https://www.gyws.org/donate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block -mt-1 px-2 pb-0.2 pt-0 text-lg text-black bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105"
            >
              Donate
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              isActive("/") ? "bg-gray-800 text-[rgb(230,197,37)]" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              isActive("/about") ? "bg-gray-800 text-[rgb(230,197,37)]" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/centers" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              isActive("/centers") ? "bg-gray-800 text-[rgb(230,197,37)]" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Centers
          </Link>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              isActive("/contact") ? "bg-gray-800 text-[rgb(230,197,37)]" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
          <Link 
            to="/initiatives" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              isActive("/initiatives") ? "bg-gray-800 text-[rgb(230,197,37)]" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Initiatives
          </Link>
          <Link 
            to="/join" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              isActive("/join") ? "bg-gray-800 text-[rgb(230,197,37)]" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Join Us
          </Link>
          <Link 
            to="/members" 
            onClick={closeMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              isActive("/members") ? "bg-gray-800 text-[rgb(230,197,37)]" : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Members
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;