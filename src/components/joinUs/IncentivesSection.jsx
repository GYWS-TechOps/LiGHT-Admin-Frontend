import React from "react";

const incentives = [
  { text: "Certificates", color: "bg-[#1A2930] text-white" },
  { text: "NGO Work Experience", color: "bg-[#1A2930] text-white" },
  { text: "Guidance and Mentorship", color: "bg-[#1A2930] text-white" },
  { text: "Already established platform for team formation", color: "bg-[#1A2930] text-white" },
  { text: "Skill Development", color: "bg-[#FFD42D] text-black" },
  { text: "Can get a chance to visit IIT Kharagpur", color: "bg-[#FFD42D] text-black" },
  { text: "Other Help", color: "bg-[#FFD42D] text-black" },
];

const Incentives = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-[#f5f6f7]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-500">
            Incentives
          </h2>
          <div className="w-16 h-1 bg-[rgb(247,218,71)]  mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6 justify-items-center">
            {incentives.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-lg shadow-md h-28 w-64 flex items-center justify-center text-center px-4 font-semibold transition-shadow duration-200 hover:shadow-xl cursor-pointer`}
              >
                <span className="truncate w-full">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {incentives.slice(4).map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-lg shadow-md h-28 w-64 flex items-center justify-center text-center px-4 font-semibold transition-shadow duration-200 hover:shadow-xl cursor-pointer`}
              >
                <span className="whitespace-normal break-words w-full">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incentives;
