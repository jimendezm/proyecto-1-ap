import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/clients', label: 'Clientes', icon: '👥' },
  { to: '/contacts', label: 'Contactos', icon: '📇' },
  { to: '/tasks', label: 'Tareas', icon: '✅' },
  { to: '/reports', label: 'Reportes', icon: '📑' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">CRM Demo</h2>
      <ul className="sidebar-list">
        {navItems.map(({ to, label, icon }) => (
          <li key={to}>
            <Link
              to={to}
              className={`sidebar-link ${
                location.pathname === to ? 'active' : ''
              }`}
            >
              <span className="icon">{icon}</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
