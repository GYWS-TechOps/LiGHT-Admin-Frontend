import React, { useMemo, useState, useEffect } from 'react';
import { getJson } from '../utils/api';
import ProgressiveImage from '../components/ProgressiveImage';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchImages = async () => {
      try {
        const data = await getJson('/api/gallery');
        if (isMounted) {
          setImages(data);
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load gallery images.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchImages();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => (
    ['All', ...new Set(images.map((img) => img.category))]
  ), [images]);

  const filteredImages = useMemo(() => (
    filter === 'All'
      ? images
      : images.filter((img) => img.category === filter)
  ), [images, filter]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4 text-center">
            Gallery
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-lg">
            <span className="hover:text-[rgb(230,197,37)] transition-colors cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-[rgb(230,197,37)]">Gallery</span>
          </div>
          <div className="mt-8 w-24 h-1 bg-[rgb(230,197,37)] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-[rgb(230,197,37)] text-gray-900 shadow-md'
                    : 'bg-white text-gray-800 border border-gray-300 hover:border-[rgb(230,197,37)] hover:text-[rgb(230,197,37)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && (
              <div className="col-span-full text-center text-gray-500">Loading images...</div>
            )}
            {error && !loading && (
              <div className="col-span-full text-center text-red-600">{error}</div>
            )}
            {!loading && !error && filteredImages.length === 0 && (
              <div className="col-span-full text-center text-gray-500">No images available.</div>
            )}
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-gray-200"
              >
                <ProgressiveImage
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  containerClassName="w-full h-64"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg">{img.title}</p>
                    <p className="text-gray-300 text-sm">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <div className="relative flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[rgb(230,197,37)] transition-colors"
            >
              ✕
            </button>
            <ProgressiveImage
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-w-2xl max-h-[80vh] w-auto h-auto object-contain rounded-lg"
              containerClassName="max-w-2xl max-h-[80vh]"
            />
            <div className="text-center mt-6">
              <h2 className="text-lg font-semibold text-white">{selectedImage.title}</h2>
              <p className="text-sm font-normal text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}