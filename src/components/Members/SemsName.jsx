import React, { useEffect, useState } from "react";
import { getJson } from "../../utils/api";

const SemsName = () => {
  const [sems, setSems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSems = async () => {
      try {
        const data = await getJson('/api/sems');
        if (isMounted) {
          setSems(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load senior executive members.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSems();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading members...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {sems.map((sem) => (
        <div key={sem.id} className="relative w-60 h-20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white border border-gray-200">
          {/* Content - Centered */}
          <div className="flex items-center justify-center h-full p-4">
            <h3 className="text-lg font-bold text-gray-800 text-center">{sem.name}</h3>
          </div>

          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(230,197,37)] via-yellow-400 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default SemsName;