import React from "react";
import ProgressiveImage from "../ProgressiveImage";

const HelpCard = ({ img, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border-b-4 border-yellow-400 p-6 h-100 transition-all duration-1000 ease-in-out hover:bg-yellow-200">
      <ProgressiveImage src={img} alt="icon" className="h-40 mx-auto mb-4" containerClassName="h-40 mx-auto mb-4" />
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default HelpCard;
