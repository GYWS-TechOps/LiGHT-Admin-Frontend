import React from 'react';

const OurStory = () => {
  const timelineData = [
    {
      year: '2017',
      title: 'LiGHT Started',
      description: 'LiGHT was started with a vision to brighten lives through community-driven initiatives.'
    },
    {
      year: '2019',
      title: 'First Nationwide Social Event',
      description: 'Expanded reach with the first nationwide event, uniting centers across India.'
    },
    {
      year: '2020',
      title: 'Restructuring for Efficiency',
      description: 'Introduced workflow changes and network restructuring to improve impact delivery.'
    },
    {
      year: '2022',
      title: 'Growth & Expansion',
      description: 'Hosted the first fundraising and annual meet; network grew to 10 active centers.'
    },
    {
      year: '2023',
      title: 'Going Digital',
      description: 'Launched the official website, enhancing accessibility and visibility nationwide.'
    },
    {
      year: '2025',
      title: 'Offline Samavesh',
      description: 'First-ever offline Samavesh (Annual Meet of LiGHT Centers) conducted at IIT Kharagpur.'
    },
    {
      year: '2025',
      title: 'Expansion Drive',
      description: '3 new LiGHT centers established across 2 states under the Expansion Drive.'
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-[rgb(230,197,37)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to a nationwide network, here's how LiGHT has evolved over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute top-0 h-full w-0.5 bg-gray-200 left-4 md:left-1/2 md:-translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-10">
              {/* The circle on the timeline */}
              <div className="absolute top-1 w-8 h-8 bg-white border-4 border-[rgb(230,197,37)] rounded-full left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"></div>

              {/* The content card */}
              <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:w-1/2' : 'md:ml-auto md:pl-8 md:w-1/2'}`}>
                <div className="relative bg-white p-4 rounded-lg shadow-md border border-gray-100">
                  {/* Pointer arrow for all screens */}
                  <div className={`absolute top-4 w-3 h-3 bg-white transform rotate-45 left-[-6px] ${index % 2 === 0 ? 'md:left-auto md:right-[-6px]' : ''}`}></div>
                  
                  <span className="font-bold text-lg text-[rgb(230,197,37)]">{item.year}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;