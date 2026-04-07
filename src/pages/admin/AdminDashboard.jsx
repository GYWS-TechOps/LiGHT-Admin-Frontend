import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard = () => {
  const quickLinks = [
    { title: 'Events', description: 'Manage events and programs', path: '/admin/events', count: '—' },
     { title: 'Media Coverage', description: 'Manage press and news', path: '/admin/media', count: '—' },
    { title: 'Gallery', description: 'Manage photo gallery', path: '/admin/gallery', count: '—' },
    { title: 'Awards', description: 'Manage awards and recognitions', path: '/admin/awards', count: '—' },
    { title: 'Samavesh', description: 'Manage Samavesh annual meet items', path: '/admin/samavesh', count: '—' },
    { title: 'Centers', description: 'Manage LiGHT centers', path: '/admin/centers', count: '—' },
    { title: 'Members', description: 'Manage team members', path: '/admin/members', count: '—' },
    
    { title: 'SEMS', description: 'Manage Senior Executive Members', path: '/admin/sems', count: '—' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">{link.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{link.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Guide</h3>
          <div className="space-y-3 text-gray-600">
            <p>Welcome to the LiGHT Admin Panel!</p>
            <p>• <strong>To add content:</strong> Click on any section above, then click "<strong>Add New</strong>"</p>
            <p>• <strong>To upload images:</strong> When creating/editing content, use the image <strong>Upload</strong> feature</p>
            <p>• <strong>To edit:</strong> Click the <strong>Edit</strong> button on any item</p>
            <p>• <strong>To delete:</strong> Click the <strong>Delete</strong> button on any item</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
