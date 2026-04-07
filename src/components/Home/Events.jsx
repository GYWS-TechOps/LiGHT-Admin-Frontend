import React, { useEffect, useState } from 'react';
import EventsCard from './EventsCard';
import { getJson } from '../../utils/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchEvents = async () => {
      try {
        const data = await getJson('/api/events?featured=true');
        if (isMounted) {
          setEvents(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load events right now.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEvents();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-gray-800 mb-4">Featured Events</h2>
          <div className="w-16 h-1 my-10 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Cards Grid - 2 cards per row on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {loading && (
            <div className="col-span-full text-center text-gray-500">Loading events...</div>
          )}
          {error && !loading && (
            <div className="col-span-full text-center text-red-600">{error}</div>
          )}
          {!loading && !error && events.length === 0 && (
            <div className="col-span-full text-center text-gray-500">No events available.</div>
          )}
          {events.map((card) => (
            <EventsCard
              key={card.id}
              image={card.coverImage}
              title={card.title}
              metrics={card.metrics}
              description={card.description}
              variant={card.variant}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
       
        <a href="/initiatives" className="inline-block px-2 py-1 text-lg text-white bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105">Initiatives</a>
      </div>
    </section>
  );
};

export default Events;