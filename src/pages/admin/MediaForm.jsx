import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import ImageUpload from '../../components/admin/ImageUpload';
import { mediaApi } from '../../utils/adminApi';

const MediaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    outlet: '',
    publishedAt: '',
  });

  useEffect(() => {
    if (isEditing) {
      fetchMedia();
    }
  }, [id]);

  const fetchMedia = async () => {
    try {
      const mediaList = await mediaApi.list();
      const item = mediaList.find((m) => m.id === parseInt(id));
      if (item) {
        setFormData({
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl,
          outlet: item.outlet,
          publishedAt: item.publishedAt ? item.publishedAt.split('T')[0] : '',
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      const data = {
        ...formData,
        publishedAt: new Date(formData.publishedAt).toISOString(),
      };

      if (isEditing) {
        await mediaApi.update(id, data);
      } else {
        await mediaApi.create(data);
      }
      navigate('/admin/media');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-8">Loading...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isEditing ? 'Edit Media Coverage' : 'Add New Media Coverage'}
        </h2>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image *</label>
            <ImageUpload
              value={formData.imageUrl}
              onChange={(url) => handleChange('imageUrl', url)}
              folder="light-website/media"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">News Outlet *</label>
            <input
              type="text"
              value={formData.outlet}
              onChange={(e) => handleChange('outlet', e.target.value)}
              placeholder="e.g., Times of India"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Published Date *</label>
            <input
              type="date"
              value={formData.publishedAt}
              onChange={(e) => handleChange('publishedAt', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 disabled:opacity-50"
            >
              {saving ? 'Saving...' : isEditing ? 'Update' : 'Add Media Coverage'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin/media')}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default MediaForm;
