import React from 'react';
import ProgressiveImage from '../ProgressiveImage';

const Mission = () => {
  return (
    <section className='py-2 px-6 bg-gray-100 relative mt-[-12vh] max-w-[85vw] mx-auto z-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-0  md:divide-x divide-gray-400'>
          
          {/* Our Mission */}
          <div className='text-center px-8 py-12 md:py-8'>
            <div className='mb-6'>
              <ProgressiveImage src="/images/Home/mission.webp" alt="Our Mission" className='w-16 h-16 mx-auto object-contain' containerClassName='w-16 h-16 mx-auto' />
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Mission</h3>
            <p className='text-gray-600 leading-relaxed text-justify'>
              LiGHT exists to share the knowledge, experience, and expertise of the Gopali 
              Youth Welfare Society to engage young people across the nation in solving 
              social problems that affect their generation.
            </p>
          </div>

          {/* Our Plan */}
          <div className='text-center px-8 md:py-8 max-w-[80vw]'>
            <div className='mb-6'>
              <ProgressiveImage src="/images/Home/plan.webp" alt="Our Plan" className='w-16 h-16 mx-auto object-contain' containerClassName='w-16 h-16 mx-auto' />
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Plan</h3>
            <p className='text-gray-600 leading-relaxed text-justify'>
              We aim to engage our centers in developing a nationwide social 
              initiative. Our goal is to provide them with the essential skills to recognize 
              local challenges and design effective social initiatives as they progress.
            </p>
          </div>

          {/* Our Vision */}
          <div className='text-center px-8 py-12 md:py-8'>
            <div className='mb-6'>
              <ProgressiveImage src="/images/Home/vision.webp" alt="Our Vision" className='w-16 h-16 mx-auto object-contain' containerClassName='w-16 h-16 mx-auto' />
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Vision</h3>
            <p className='text-gray-600 leading-relaxed text-justify'>
              We aim to build a network of student-led centers across India, working to 
              uplift marginalized communities and support sustainable development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;