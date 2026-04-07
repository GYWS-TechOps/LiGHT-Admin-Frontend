import React, { useEffect, useMemo, useState } from 'react';
import CountUp from 'react-countup';
import { getJson } from '../../utils/api';

const Reach = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCenters = async () => {
      try {
        const data = await getJson('/api/centers');
        if (isMounted) {
          setCenters(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load reach data.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCenters();
    return () => {
      isMounted = false;
    };
  }, []);

  const { numberOfStates, numberOfCenters } = useMemo(() => {
    const stateCount = new Set(centers.map((center) => center.state)).size;
    return {
      numberOfStates: stateCount,
      numberOfCenters: centers.length,
    };
  }, [centers]);
  
  return (
    <section className='py-16 px-6 bg-gray-900 text-white relative mt-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-evenly gap-8'>
          
          {/* OUR REACH Title */}
          <div className='text-center md:text-left mb-8 md:mb-0'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white'>
              OUR<br />REACH
            </h2>
          </div>
          
          {/* Centers */}
          <div className='text-center'>
            <div className='text-5xl md:text-6xl font-semibold text-[rgb(230,197,37)] mb-2'>
              {loading ? '--' : <CountUp end={numberOfCenters} duration={3.5} enableScrollSpy scrollSpyOnce />}
            </div>
            <div className='text-lg text-gray-300'>
              Centers
            </div>
          </div>
          
          {/* States */}
          <div className='text-center'>
            <div className='text-5xl md:text-6xl font-semibold text-[rgb(230,197,37)] mb-2'>
              {loading ? '--' : <CountUp end={numberOfStates} duration={3.5} enableScrollSpy scrollSpyOnce />}
            </div>
            <div className='text-lg text-gray-300'>
              States
            </div>
          </div>
          
          {/* Active Members */}
          <div className='text-center'>
            <div className='text-5xl md:text-6xl font-semibold text-[rgb(230,197,37)] mb-2'>
              <CountUp end={400} duration={4} enableScrollSpy scrollSpyOnce/>+
            </div>
            <div className='text-lg text-gray-300'>
              Active Members
            </div>
          </div>

          {error && (
            <div className='text-center text-red-500 mt-6 w-full'>
              {error}
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Reach;