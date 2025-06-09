// Deals.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import '../styles/Page.css';
import '../styles/Deals.css';

const initialDeals = [
  {
    id: '1',
    title: 'Client contacted via chat',
    contact: 'Richard Anderson',
    email: 'richard.a@gmail.com',
    phone: '+1 209 676 3413',
    company: 'Omnichannel Marketing',
    amount: '$145.00',
    owner: 'Joseph Wilson',
    comments: 12,
    stage: 'New'
  },
  {
    id: '2',
    title: 'Application for 2d course',
    contact: 'David Allen',
    email: 'david.allen@gmail.com',
    phone: '+1 209 476 5510',
    company: 'Network marketing',
    amount: '$120.00',
    owner: 'Matthew Sanchez',
    comments: 26,
    stage: 'New'
  },
  {
    id: '3',
    title: 'Thomas Young asked for invoice',
    contact: 'Thomas Young',
    email: 't.myoung@yahoo.com',
    phone: '+1 312 555 6700',
    company: 'Omnichannel Marketing',
    amount: '$120.00',
    owner: 'Joseph Wilson',
    comments: 5,
    stage: 'Bill issued'
  },
  {
    id: '4',
    title: 'Chatbot payment accepted',
    contact: 'Daniel Scott',
    email: 'd.scott-365@gmail.com',
    phone: '+1 326 125 1704',
    company: 'Omnichannel Marketing',
    amount: '$145.00',
    owner: 'Matthew Sanchez',
    comments: 34,
    stage: 'Order completed'
  }
];

const stages = ['New', 'In progress', 'Bill issued', 'Order completed'];

const Deals = () => {
  const [deals, setDeals] = useState(initialDeals);
  const [showModal, setShowModal] = useState(false);
  const [newDeal, setNewDeal] = useState({ title: '', contact: '', email: '', phone: '', company: '', amount: '', owner: '', comments: 0 });

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { draggableId, destination } = result;
    setDeals(prev => prev.map(deal =>
      deal.id === draggableId ? { ...deal, stage: destination.droppableId } : deal
    ));
  };

  const handleAddDeal = () => {
    const id = (deals.length + 1).toString();
    setDeals([...deals, { ...newDeal, id, stage: 'New' }]);
    setShowModal(false);
    setNewDeal({ title: '', contact: '', email: '', phone: '', company: '', amount: '', owner: '', comments: 0 });
  };

  return (
    <div className="page">
      <div className="deals-header">
        <h1>Deals</h1>
        <button className="btn-green" onClick={() => setShowModal(true)}>+ Add deal</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="pipeline-board">
          {stages.map(stage => (
            <Droppable droppableId={stage} key={stage}>
              {(provided) => (
                <div className="pipeline-column" ref={provided.innerRef} {...provided.droppableProps}>
                  <h3>{stage}</h3>
                  <div className="card-stack">
                    {deals
                      .filter(deal => deal.stage === stage)
                      .map((deal, index) => (
                        <Draggable draggableId={deal.id} index={index} key={deal.id}>
                          {(provided) => (
                            <div className="deal-card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <strong>{deal.title}</strong>
                              <p>{deal.contact} <br /> {deal.email} <br /> {deal.phone}</p>
                              <small>{deal.company}</small>
                              <p><b>{deal.amount}</b> – {deal.owner}</p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h2>Add Deal</h2>
                <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form className="modal-form" onSubmit={e => {
                e.preventDefault();
                handleAddDeal();
            }}>
                <input type="text" placeholder="Title" required value={newDeal.title} onChange={e => setNewDeal({ ...newDeal, title: e.target.value })} />
                <input type="text" placeholder="Contact name" required value={newDeal.contact} onChange={e => setNewDeal({ ...newDeal, contact: e.target.value })} />
                <input type="email" placeholder="Email" required value={newDeal.email} onChange={e => setNewDeal({ ...newDeal, email: e.target.value })} />
                <input type="tel" placeholder="Phone" value={newDeal.phone} onChange={e => setNewDeal({ ...newDeal, phone: e.target.value })} />
                <input type="text" placeholder="Company" value={newDeal.company} onChange={e => setNewDeal({ ...newDeal, company: e.target.value })} />
                <input type="text" placeholder="Value" value={newDeal.amount} onChange={e => setNewDeal({ ...newDeal, amount: e.target.value })} />
                <input type="text" placeholder="Owner" value={newDeal.owner} onChange={e => setNewDeal({ ...newDeal, owner: e.target.value })} />
                <button type="submit" className="btn-green">Save</button>
            </form>
            </div>
        </div>
        )}

    </div>
  );
};

export default Deals;
