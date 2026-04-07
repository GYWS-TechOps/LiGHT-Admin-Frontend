import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getJson } from "../utils/api";

const customIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <div style="position: relative;">
      <svg width="24" height="36" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 9.75 12 24 12 24s12-14.25 12-24c0-6.627-5.373-12-12-12z" 
              fill="rgb(242,106,54)" 
              stroke="rgb(180,60,30)" 
              stroke-width="1.5"/>
        <circle cx="12" cy="12" r="4" fill="white"/>
        <circle cx="12" cy="12" r="2" fill="rgb(180,60,30)"/>
      </svg>
    </div>
  `,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36],
});

const headquartersIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <div style="position: relative;">
      <svg width="24" height="36" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 9.75 12 24 12 24s12-14.25 12-24c0-6.627-5.373-12-12-12z" 
              fill="rgb(230,197,37)" 
              stroke="rgb(30,60,180)" 
              stroke-width="1.5"/>
        <circle cx="12" cy="12" r="4" fill="white"/>
        <circle cx="12" cy="12" r="2" fill="rgb(30,60,180)"/>
      </svg>
    </div>
  `,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36],
});

const indiaCenter = [24.5937, 78.9629];
const indiaBounds = [
  [6.4627, 68.1097],
  [35.5044, 97.3953],
];

const Centers = () => {
  const [activeCenter, setActiveCenter] = useState(null);
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
          setError('Unable to load centers right now.');
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

  const stats = useMemo(() => ({
    centerCount: centers.length,
    stateCount: new Set(centers.map((center) => center.state)).size,
  }), [centers]);

  const headquarterCenters = useMemo(
    () => centers.filter((center) => center.name === 'Kharagpur'),
    [centers],
  );

  const otherCenters = useMemo(
    () => centers.filter((center) => center.name !== 'Kharagpur'),
    [centers],
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Centers</h1>
              <p className="text-base md:text-lg text-gray-300 max-w-xl">
                A human network across India — explore our centers and discover the impact we are making together.
              </p>
              <div className="mt-6 w-20 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-600 transition-colors duration-300 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[rgb(230,197,37)] mb-2">
                    {loading ? '--' : stats.centerCount}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Centers</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-600 transition-colors duration-300 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[rgb(230,197,37)] mb-2">
                    {loading ? '--' : stats.stateCount}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">States</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-600 transition-colors duration-300 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[rgb(230,197,37)] mb-2">400+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">Active Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[rgb(230,197,37)] p-6">
                <h2 className="text-2xl font-bold text-gray-900">Interactive Map</h2>
                <p className="text-gray-800 mt-1">Click on any marker to explore our centers.</p>
              </div>

              <div className="h-[500px] md:h-[600px] relative">
                {error && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 text-red-600 font-semibold">
                    {error}
                  </div>
                )}
                {(!loading && !error && centers.length === 0) && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 text-gray-600 font-semibold">
                    No centers available yet.
                  </div>
                )}
                <MapContainer
                  center={indiaCenter}
                  zoom={4.5}
                  scrollWheelZoom
                  style={{ height: "100%", width: "100%" }}
                  maxBounds={indiaBounds}
                  maxBoundsViscosity={1.0}
                  minZoom={4}
                  maxZoom={10}
                  className="z-0"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {centers.map((center) => (
                    <Marker
                      key={center.id}
                      position={[center.lat, center.lng]}
                      icon={center.name === 'Kharagpur' ? headquartersIcon : customIcon}
                      eventHandlers={{
                        click: () => setActiveCenter(center),
                      }}
                    />
                  ))}
                </MapContainer>

                {activeCenter && (
                  <div className="absolute top-20 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-10 border-l-4 border-[rgb(230,197,37)]">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-gray-900">{activeCenter.name}</h3>
                      <button
                        onClick={() => setActiveCenter(null)}
                        className="text-gray-400 hover:text-gray-600 ml-2"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-[rgb(230,197,37)] font-semibold mb-2">{activeCenter.state}</p>
                    <p className="text-sm text-gray-600">{activeCenter.description}</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6 h-[500px] md:h-[600px] overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{activeCenter && activeCenter.name === 'Kharagpur' ? 'Headquarter Details' : 'Center Details'}</h2>
                {activeCenter && (
                  <p className="text-sm text-[rgb(230,197,37)] font-semibold">
                    {activeCenter.name === 'Kharagpur' ? 'Headquarter' : activeCenter.name}
                  </p>
                )}
              </div>

              {activeCenter ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold">Active {activeCenter.name === 'Kharagpur' ? 'Headquarter' : 'Center'}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{activeCenter.name}</h3>

                  <p className="text-gray-700">
                    <strong className="text-gray-900">📍 State:</strong> {activeCenter.state}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{activeCenter.name === 'Kharagpur' ? 'About LiGHT' : 'About this center'}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{activeCenter.description}</p>
                  </div>

                  <button
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                    onClick={() => setActiveCenter(null)}
                  >
                    Clear Selection
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="text-6xl">🗺️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Explore Our Centers</h3>
                    <p className="text-gray-600">Click on any marker on the map to learn more about our centers across India.</p>
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-3 text-center">Headquarter</h4>
                    <div className="space-y-2">
                      {headquarterCenters.map((center) => (
                        <button
                          key={center.id}
                          className="w-full text-left bg-gray-50 hover:bg-[rgb(230,197,37)] hover:text-gray-900 rounded-lg p-3 transition-all duration-300 group"
                          onClick={() => setActiveCenter(center)}
                        >
                          <div className="font-semibold text-gray-900 group-hover:text-gray-900">{center.name}</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-700 mt-1">{center.state}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-3 text-center">All Centers</h4>
                    <div className="space-y-2">
                      {otherCenters.map((center) => (
                        <button
                          key={center.id}
                          className="w-full text-left bg-gray-50 hover:bg-[rgb(230,197,37)] hover:text-gray-900 rounded-lg p-3 transition-all duration-300 group"
                          onClick={() => setActiveCenter(center)}
                        >
                          <div className="font-semibold text-gray-900 group-hover:text-gray-900">{center.name}</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-700 mt-1">{center.state}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Centers;
