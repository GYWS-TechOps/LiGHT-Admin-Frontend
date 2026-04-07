import React from "react";
import JoinCard from "./JoinCard";
import ProgressiveImage from "../ProgressiveImage";

const WhoCanJoin = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-500 mb-6">Who can join us?</h2>
      <div className="h-1 w-12 bg-yellow-400 mx-auto mb-10"></div>

      <div className="flex justify-center mb-12">
        <ProgressiveImage src="/images/join us/joinIcon.webp" alt="Join Icon" className="h-60 w-60" containerClassName="h-60 w-60" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="w-72">
            <JoinCard
              img="/images/join us/socialWorker.webp"
              title="Social Worker"
              text="We always believe that building a forest is much better than building a tree, and so the social workers."
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-72">
            <JoinCard
              img="/images/join us/student.webp"
              title="College Student"
              text="College Students like Ram, who instead of blaming governments want..."
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-72">
            <JoinCard
              img="/images/join us/professor.webp"
              title="College Professor"
              text="If you are a College Professor who thinks that your students should get opportunity..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
