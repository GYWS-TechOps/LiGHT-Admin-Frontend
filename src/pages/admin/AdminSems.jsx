import { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { semsApi } from '../../utils/adminApi';

const AdminSems = () => {
  const [sems, setSems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSems();
  }, []);

  const fetchSems = async () => {
    try {
      const data = await semsApi.list();
      setSems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    setSaving(true);
    try {
      const sem = await semsApi.create(newName.trim());
      setSems([...sems, sem].sort((a, b) => a.name.localeCompare(b.name)));
      setNewName('');
    } catch (err) {
      alert('Failed to add: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (sem) => {
    setEditingId(sem.id);
    setEditName(sem.name);
  };

  const handleUpdate = async (id) => {
    if (!editName.trim()) return;

    setSaving(true);
    try {
      const updated = await semsApi.update(id, editName.trim());
      setSems(sems.map((s) => (s.id === id ? updated : s)).sort((a, b) => a.name.localeCompare(b.name)));
      setEditingId(null);
      setEditName('');
    } catch (err) {
      alert('Failed to update: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this SEM?')) return;

    try {
      await semsApi.delete(id);
      setSems(sems.filter((s) => s.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditName('');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">SEMS (Senior Executive Members)</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Add New SEM */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New SEM</h3>
          <form onSubmit={handleAdd} className="flex gap-4">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter name"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              disabled={saving}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 disabled:opacity-50"
            >
              {saving ? 'Adding...' : 'Add SEM'}
            </button>
          </form>
        </div>

        {/* SEMS List */}
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : sems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No SEMS found</div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sems.map((sem) => (
                  <tr key={sem.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === sem.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          autoFocus
                        />
                      ) : (
                        <div className="text-sm font-medium text-gray-900">{sem.name}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {editingId === sem.id ? (
                        <>
                          <button
                            onClick={() => handleUpdate(sem.id)}
                            disabled={saving}
                            className="text-green-600 hover:text-green-900 mr-4"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(sem)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(sem.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminSems;
