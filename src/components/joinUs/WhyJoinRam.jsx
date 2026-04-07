import React from "react";
import ReasonCard from "./ReasonCard";

const WhyJoinRam = () => {
  const reasons = [
    "1. By joining LiGHT, he will become a part of a network which is spread nationwide across 12 states. He could share and discuss his ideas on a platform consisting of more than 150 members having diverse opinions.",
    "2. He will find this platform unique from other organizations because it was completely student-run, which will enable him to communicate and understand better with other student members.",
    "3. He would receive a lot of incentives such as certification, proper guidance, improving skills and personality, and most importantly an established platform for team format.",
    "4. Apart from this, he will also receive other benefits from the team such as career guidance, various resources, mentorship and various others."
  ];

  return (
    <div className="bg-white py-16 px-6 text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-500 mb-4">
        Why would Ram join us?
      </h2>
      <div className="h-1 w-12 bg-yellow-400 mx-auto mb-10"></div>

      {/* Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto ">
        {reasons.map((reason, index) => (
          <ReasonCard key={index} text={reason} />
        ))}
      </div>
    </div>
  );
};

export default WhyJoinRam;
