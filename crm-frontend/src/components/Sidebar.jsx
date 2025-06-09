import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdPeople, MdContacts, MdChecklist, MdAssessment, MdInbox, MdHandshake } from 'react-icons/md';
import '../styles/Sidebar.css';

const navItems = [
  { to: '/', label: 'Dashboard', icon: <MdDashboard /> },
  { to: '/clients', label: 'Inbox', icon: <MdInbox /> },
  { to: '/contacts', label: 'Contacts', icon: <MdContacts /> },
  { to: '/deals', label: 'Deals', icon: <MdHandshake /> },
  { to: '/tasks', label: 'Tasks', icon: <MdChecklist /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src="./logo/logoOficial.png" alt="WataCRM Logo" className="logo-image" />
      </div>
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
