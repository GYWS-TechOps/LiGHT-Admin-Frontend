import React from 'react';

const CenterJourney = () => {
  const journeyData = [
    {
      phase: 'Formation',
      title: 'Starting Point',
      points: [
        'A center begins from scratch with a small group of motivated volunteers.',
        'Focus is on team building, understanding local community needs, and setting up the foundation.',
        'Initial guidance and mentorship are provided by the core LiGHT network.'
      ]
    },
    {
      phase: 'Phase 1',
      title: 'Grooming & Structure',
      points: [
        'The center undergoes grooming sessions to align with LiGHT’s vision and goals.',
        'Establishes a basic organizational structure with defined roles and responsibilities.',
        'Starts conducting small-scale events and awareness programs.'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Growth & Independence',
      points: [
        'Develops an improved hierarchy with sub-teams for specific focus areas.',
        'Organizes independent social events and executes its first fundraising event.',
        'Forms center-specific teams to handle responsibilities independently.'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Maturity & Leadership',
      points: [
        'The center operates with independent teams capable of managing all initiatives.',
        'A representative joins the LiGHT headquarters network for decision-making.',
        'Launches and sustains a Flagship Initiative, defining the center’s long-term impact.'
      ]
    }
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">The Journey of a LiGHT Center</h2>
          <div className="w-24 h-1 bg-[rgb(230,197,37)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a small group of volunteers to a self-sustaining social impact hub, every center follows a structured path to maturity.
          </p>
        </div>

        {/* Journey Steps in Boxes */}
         <div className="space-y-8">
          {journeyData.map((step, index) => (
            <div key={index} className="bg-amber-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              {/* Card Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[rgb(230,197,37)] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-5 flex-shrink-0">
                  {index === 0 ? '💡' : index}
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{step.phase}</span>
                 
                  <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="pl-0 md:pl-[68px]">
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {step.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterJourney;