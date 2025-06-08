import React from 'react';
import '../styles/Page.css';


const Dashboard = () => {
  const stats = [
    { label: 'Active Deals', value: '11,985' },
    { label: 'Closed Deals', value: '4' },
    { label: 'Deals Amount', value: '14,643 UAH' },
    { label: 'New Contacts', value: '7' },
  ];

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        {stats.map((s, i) => (
          <div key={i} className="card">
            <h3 style={{ color: '#888', marginBottom: '0.3rem' }}>{s.label}</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
