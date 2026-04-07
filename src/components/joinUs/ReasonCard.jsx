import React from "react";

const ReasonCard = ({ text }) => {
  return (
    <div className="bg-amber-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[rgb(230,197,37)] p-6 h-full flex flex-col">
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">{text}</p>
    </div>
  );
};

export default ReasonCard;