import React from "react";
import ProgressiveImage from "../ProgressiveImage";

const IntroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700 p-4">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg max-w-2xl w-full">
        {/* Left Box with Cover Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-6">
          <ProgressiveImage
            src="/images/join us/cover.webp"
            alt="Cover"
            className="h-64 md:h-70 w-56 md:w-60 object-cover"
            containerClassName="h-64 md:h-70 w-56 md:w-60"
          />
        </div>

        {/* Right Box */}
        <div className="bg-white flex flex-col justify-center items-center px-8 md:px-10 py-8 w-full md:w-1/2 text-center">
          <ProgressiveImage src="/images/join us/ram1.webp" alt="Ram" className="h-40 mb-6" containerClassName="h-40 mb-6" />
          <p className="text-gray-600 text-sm md:text-base">
            Hello, he is Ram, a college student. He sees some social problems
            around locality. Instead of blaming governments he wants to take
            control and do something for society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;