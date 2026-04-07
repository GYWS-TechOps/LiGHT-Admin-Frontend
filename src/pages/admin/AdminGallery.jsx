import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import { galleryApi } from '../../utils/adminApi';
import ProgressiveImage from '../../components/ProgressiveImage';

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const data = await galleryApi.list();
      setImages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      await galleryApi.delete(id);
      setImages(images.filter((img) => img.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
          <Link
            to="/admin/gallery/new"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add New Image
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : images.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No images found</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden">
                <ProgressiveImage
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-40 object-cover"
                  containerClassName="w-full h-40"
                />
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 truncate">{image.title}</h3>
                  <p className="text-sm text-gray-500">{image.category}</p>
                  <div className="mt-2 flex gap-2">
                    <Link
                      to={`/admin/gallery/${image.id}/edit`}
                      className="text-blue-600 hover:text-blue-900 text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="text-red-600 hover:text-red-900 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;
