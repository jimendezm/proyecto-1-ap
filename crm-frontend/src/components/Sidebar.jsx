import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdPeople, MdContacts, MdChecklist, MdAssessment } from 'react-icons/md';
import '../styles/Sidebar.css';

const navItems = [
  { to: '/', label: 'Dashboard', icon: <MdDashboard /> },
  { to: '/clients', label: 'Clientes', icon: <MdPeople /> },
  { to: '/contacts', label: 'Contactos', icon: <MdContacts /> },
  { to: '/tasks', label: 'Tareas', icon: <MdChecklist /> },
  { to: '/reports', label: 'Reportes', icon: <MdAssessment /> },
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
              className={`sidebar-link ${location.pathname === to ? 'active' : ''}`}
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
