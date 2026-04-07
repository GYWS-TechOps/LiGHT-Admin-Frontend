import React, { useEffect, useState } from 'react';
import MediaCard from '../components/Home/MediaCard';
import { getJson } from '../utils/api';

// filepath: c:\coding\LiGHT\LiGHT-Website\src\pages\Mediacoverage.jsx
const Mediacoverage = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMedia = async () => {
      try {
        const data = await getJson('/api/media-coverages');
        if (isMounted) {
          setMedia(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load media coverage right now.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMedia();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-semibold text-gray-800 mb-4 text-center">
        Media Coverage
        <div className="w-16 h-1 my-10 bg-yellow-400 mx-auto"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {loading && (
          <div className="col-span-full text-center text-gray-500">Loading media coverage...</div>
        )}
        {error && !loading && (
          <div className="col-span-full text-center text-red-600">{error}</div>
        )}
        {!loading && !error && media.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No media coverage available.</div>
        )}
        {media.map((item) => (
          <MediaCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.imageUrl}
            date={item.publishedAt}
            newspaper={item.outlet}
          />
        ))}
      </div>
    </div>
  );
};

export default Mediacoverage;