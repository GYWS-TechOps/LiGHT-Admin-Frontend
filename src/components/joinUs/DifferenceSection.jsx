import React from "react";
import ProgressiveImage from "../ProgressiveImage";

const DifferenceSection = () => {
  return (
   <section className="bg-[#333336] text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="inline-block bg-[rgb(230,197,37)] px-5 py-2 text-2xl md:text-3xl tracking-tight">
            Difference from other platforms
          </h2>
          <div className="w-12 h-1 bg-[#F7C631] mx-auto mt-3"></div>
        </div>

        {/* Content: image left, text right */}
        <div className="mt-10 grid md:grid-cols-2 gap-y-10 gap-x-16 items-center">
          {/* Left: single image (contains all 4 diamonds) */}
          <div className="flex justify-center md:justify-start">
              <ProgressiveImage
                src="/images/join us/diamond.webp"
                alt="Difference icons"
                className="w-48 h-48"
                containerClassName="w-48 h-48"
              />
          </div>

          {/* Right: description */}
          <div className="text-center md:text-left text-gray-300 leading-relaxed">
            <p className="text-base md:text-[17px]">
              Student-run: The complete <span className="text-[#F7C631]">LiGHT</span> network is run by students studying
              in different colleges of the country. Being a student-run body
              enables better understanding and communication between members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
