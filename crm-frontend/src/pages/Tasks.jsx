// Tasks.jsx - Kanban interactivo tipo SendPulse
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import '../styles/Page.css';
import '../styles/Tasks.css';

const initialData = {
  New: [
    {
      id: '1',
      title: 'Create new composition',
      start: '2023-07-21',
      end: '2023-07-28',
      assignee: 'Avery Davis',
      priority: 'Normal',
      description: 'Task related to product creation.'
    },
    {
      id: '2',
      title: 'Create identity for Toffyshop',
      start: '2023-07-21',
      end: '2023-07-28',
      assignee: 'Phyllis Gordon',
      priority: 'Normal',
      description: 'Brand identity work.'
    }
  ],
  'In Progress': [
    {
      id: '3',
      title: 'Find new suppliers',
      start: '2023-07-07',
      end: '2023-07-31',
      assignee: 'Phyllis Gordon',
      priority: 'Normal',
      description: 'Search for alternate vendors.'
    },
    {
      id: '4',
      title: 'Create a marketing strategy for Toffyshopchik store',
      start: '2023-11-05',
      end: '2023-11-12',
      assignee: 'Avery Davis',
      priority: 'Alta',
      description: 'Promotional roadmap.'
    }
  ],
  Done: [
    {
      id: '5',
      title: 'Create special offers',
      start: '2023-11-03',
      end: '2023-11-22',
      assignee: 'Phyllis Gordon',
      priority: 'Normal',
      description: 'Sales-related tasks.'
    },
    {
      id: '6',
      title: 'Create identity: logo, brandbook, headers for social media and YouTube',
      start: '2023-07-14',
      end: '2023-07-26',
      assignee: 'Alona Smith',
      priority: 'Normal',
      description: 'Brand materials.'
    }
  ],
  Archived: [
    {
      id: '7',
      title: 'Quarterly presentation',
      start: '',
      end: '',
      assignee: 'Avery Davis',
      priority: 'Normal',
      description: 'Archived Q3 presentation.'
    },
    {
      id: '8',
      title: 'Discounts and cross-sell offers',
      start: '',
      end: '',
      assignee: 'Alona Smith',
      priority: 'Baja',
      description: 'Promo setup.'
    },
    {
      id: '9',
      title: 'Brand positioning on the market',
      start: '',
      end: '',
      assignee: '',
      priority: 'Normal',
      description: 'Market analysis.'
    }
  ]
};

const Tasks = () => {
  const [columns, setColumns] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    start: '',
    end: '',
    assignee: '',
    priority: 'Normal',
    description: '',
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const src = [...columns[source.droppableId]];
    const [moved] = src.splice(source.index, 1);
    const dest = [...columns[destination.droppableId]];
    dest.splice(destination.index, 0, moved);

    setColumns({
      ...columns,
      [source.droppableId]: src,
      [destination.droppableId]: dest,
    });
  };

  const handleSubmit = () => {
    if (!form.title) return;
    const newTask = { ...form, id: Date.now().toString() };
    setColumns(prev => ({
      ...prev,
      New: [...prev.New, newTask],
    }));
    setForm({ title: '', start: '', end: '', assignee: '', priority: 'Normal', description: '' });
    setShowModal(false);
  };

  return (
    <div className="page">
      <div className="tasks-header">
        <h1>Tasks board</h1>
        <button className="btn-green" onClick={() => setShowModal(true)}>+ Add task</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {Object.entries(columns).map(([column, items]) => (
            <Droppable droppableId={column} key={column}>
              {(provided) => (
                <div className="kanban-column" ref={provided.innerRef} {...provided.droppableProps}>
                  <h3>{column}</h3>
                  {items.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div className="task-card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <h4>{task.title}</h4>
                          <p>{task.start} → {task.end}</p>
                          <small>{task.assignee}</small>
                          <div className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Crear tarea</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form
              className="modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <input
                type="text"
                placeholder="Título"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Responsable"
                value={form.assignee}
                onChange={(e) => setForm({ ...form, assignee: e.target.value })}
                required
              />
              <input
                type="date"
                value={form.start}
                onChange={(e) => setForm({ ...form, start: e.target.value })}
              />
              <input
                type="date"
                value={form.end}
                onChange={(e) => setForm({ ...form, end: e.target.value })}
              />
              <select
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value })}
              >
                <option value="Normal">Normal</option>
                <option value="Alta">Alta</option>
                <option value="Baja">Baja</option>
              </select>
              <textarea
                rows="3"
                placeholder="Descripción..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
              <button type="submit" className="btn-confirm">Agregar tarea</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Tasks;
