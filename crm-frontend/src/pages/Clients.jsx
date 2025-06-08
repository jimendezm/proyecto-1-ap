import React from 'react';import '../styles/Page.css';


const Clients = () => {
  const clients = [
    { name: 'Empresa ABC', email: 'abc@empresa.com' },
    { name: 'Tech Solutions', email: 'contacto@tech.com' },
  ];

  return (
    <div className="page">
      <h1>Clientes</h1>
      <ul className="card-list">
        {clients.map((client, i) => (
          <li key={i} className="card">
            <strong>{client.name}</strong><br />{client.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
