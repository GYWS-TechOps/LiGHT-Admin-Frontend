import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/admin', label: 'Dashboard', exact: true },
    { path: '/admin/events', label: 'Events' },
    { path: '/admin/awards', label: 'Awards' },
    { path: '/admin/samavesh', label: 'Samavesh' },
    { path: '/admin/media', label: 'Media Coverage' },
    { path: '/admin/gallery', label: 'Gallery' },
    { path: '/admin/members', label: 'Members' },
    { path: '/admin/centers', label: 'Centers' },
    { path: '/admin/sems', label: 'SEMS' },
  ];

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/images/Home/logo.webp" alt="LiGHT Logo" className="h-12 w-auto" />
            <h1 className="text-xl font-bold text-white">LiGHT <span className="text-[rgb(230,197,37)]">Admin</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, <span className="text-[rgb(230,197,37)]">{user?.name}</span></span>
            <Link
              to="/"
              className="px-4 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-600 transition-colors duration-300"
            >
              View Site
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 bg-[rgb(230,197,37)] text-gray-900 font-semibold rounded hover:bg-[rgb(200,167,20)] transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 shadow min-h-[calc(100vh-72px)]">
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded transition-colors duration-300 ${
                      isActive(item.path, item.exact)
                        ? 'bg-[rgb(230,197,37)] text-gray-900 font-semibold'
                        : 'text-gray-300 hover:text-[rgb(230,197,37)] hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
