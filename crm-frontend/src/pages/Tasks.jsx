import React from 'react';
import '../styles/Page.css'; // clases .page, .card-list, .card

const Tasks = () => {
  const tasks = [
    { task: 'Llamar a cliente ABC', due: 'Lunes' },
    { task: 'Enviar cotización a Tech Solutions', due: 'Martes' },
  ];

  return (
    <div className="page">
      <h1>Tareas</h1>
      <ul className="card-list">
        {tasks.map((t, i) => (
          <li key={i} className="card">
            <strong>{t.task}</strong><br />
            Para: {t.due}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
