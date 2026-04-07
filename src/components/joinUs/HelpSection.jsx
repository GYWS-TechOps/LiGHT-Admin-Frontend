import React from "react";
import HelpCard from "./HelpCard";

const HelpSection = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-semibold px-1 text-gray-500 mb-4">
        How we can help Ram?
      </h2>
      <div className="h-1 w-12 bg-yellow-400 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <HelpCard img="/images/join us/platform.webp" text="1. By providing him a Platform where he can work with like-minded individuals." />
        <HelpCard img="/images/join us/leader.webp" text="2. By Bringing out the leader in him." />
        <HelpCard img="/images/join us/team.webp" text="3. To form a team and develop Team - bonding among his college mates." />
      </div>
    </div>
  );
};

export default HelpSection;
