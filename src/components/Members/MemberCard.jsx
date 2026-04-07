import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import ProgressiveImage from "../ProgressiveImage";

const MemberCard = ({ name, role, image, imageUrl, facebook, linkedin }) => {
  const displayImage = imageUrl || image;

  return (
    <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ProgressiveImage
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          containerClassName="w-full h-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      {/* Content - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-yellow-300 font-semibold mb-4">{role}</p>

        {/* Social Links */}
        <div className="flex gap-4 items-center">
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-[rgb(230,197,37)] p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <FaFacebook size={18} className="text-white hover:text-gray-900" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-[rgb(230,197,37)] p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <FaLinkedin size={18} className="text-white hover:text-gray-900" />
            </a>
          )}
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(230,197,37)] via-yellow-400 to-transparent"></div>
    </div>
  );
};

export default MemberCard;