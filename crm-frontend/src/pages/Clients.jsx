// Updated Clients.jsx with additional 10 chats
import React, { useState } from 'react';
import '../styles/Page.css';
import '../styles/Clients.css';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialChats = [
  {
    id: '1',
    name: 'Empresa ABC',
    email: 'abc@empresa.com',
    messages: [
      { text: 'Hola, necesito ayuda.' },
      { text: '¿Tienen soporte los domingos?'},
      { text: 'Gracias por su atención.' },
    ],
    stage: 'General',
    source: 'gmail'
  },
  {
    id: '2',
    name: 'Tech Solutions',
    email: 'contacto@tech.com',
    messages: [
      { text: 'Quiero cotizar.' },
      { text: '¿Pueden enviarme el plan anual?'},
      { text: 'Perfecto, lo revisaré.'},
    ],
    stage: 'Dudas',
    source: 'facebook'
  },
  {
    id: '3',
    name: 'RedCom',
    email: 'soporte@redcom.com',
    messages: [
      { text: 'Mi factura no llega.'},
      { text: 'Ya la encontré, gracias.' },
    ],
    stage: 'Errores',
    source: 'whatsapp'
  },
  {
    id: '4',
    name: 'GlobalMart',
    email: 'ventas@globalmart.com',
    messages: [
      { text: '¿El plan básico incluye reportes?' },
      { text: 'Gracias por confirmarlo.' },
    ],
    stage: 'Implementación',
    source: 'telegram'
  },
  {
    id: '5',
    name: 'GreenTech',
    email: 'contact@greentech.com',
    messages: [
      { text: 'Quiero dejar mi opinión.' },
      { text: 'Excelente servicio.' },
    ],
    stage: 'Evaluar Servicio',
    source: 'instagram'
  },
  {
    id: '6',
    name: 'NextGen Apps',
    email: 'support@nextgenapps.com',
    messages: [
      { text: '¿Cómo puedo actualizar mi suscripción?' }
    ],
    stage: 'Dudas',
    source: 'gmail'
  },
  {
    id: '7',
    name: 'EcoMarket',
    email: 'info@ecomarket.org',
    messages: [
      { text: 'Estoy interesado en sus productos ecológicos.' }
    ],
    stage: 'General',
    source: 'facebook'
  },
  {
    id: '8',
    name: 'SoftPro Inc.',
    email: 'help@softpro.io',
    messages: [
      { text: '¿Pueden ayudarme con la instalación?' }
    ],
    stage: 'Errores',
    source: 'whatsapp'
  },
  {
    id: '9',
    name: 'DesignFlow',
    email: 'hello@designflow.com',
    messages: [
      { text: '¿Ofrecen integración con Figma?' }
    ],
    stage: 'Implementación',
    source: 'telegram'
  },
  {
    id: '10',
    name: 'AquaLife',
    email: 'contacto@aqualife.org',
    messages: [
      { text: 'Quiero compartir mi experiencia con el producto.' }
    ],
    stage: 'Evaluar Servicio',
    source: 'instagram'
  },
  {
    id: '11',
    name: 'Visionary Tech',
    email: 'team@visionary.io',
    messages: [
      { text: '¿Tienen una API disponible?' }
    ],
    stage: 'Dudas',
    source: 'gmail'
  },
  {
    id: '12',
    name: 'EduCare Online',
    email: 'admin@educare.com',
    messages: [
      { text: 'Mis estudiantes no pueden acceder al contenido.' }
    ],
    stage: 'Errores',
    source: 'facebook'
  },
  {
    id: '13',
    name: 'Solaris Paneles',
    email: 'ventas@solaris.com',
    messages: [
      { text: '¿Cuál es el costo del paquete premium?' }
    ],
    stage: 'General',
    source: 'whatsapp'
  },
  {
    id: '14',
    name: 'Creative Minds',
    email: 'contact@creativeminds.org',
    messages: [
      { text: 'Estoy impresionado con su servicio al cliente.' }
    ],
    stage: 'Evaluar Servicio',
    source: 'instagram'
  },
  {
    id: '15',
    name: 'BioNova',
    email: 'bio@novahealth.com',
    messages: [
      { text: 'Gracias por la rápida respuesta.' }
    ],
    stage: 'Implementación',
    source: 'telegram'
  },
];

const stages = ['General', 'Dudas', 'Errores', 'Implementación', 'Evaluar Servicio'];

const Clients = () => {
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { draggableId, destination } = result;
    setChats(prev => prev.map(chat =>
      chat.id === draggableId ? { ...chat, stage: destination.droppableId } : chat
    ));
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setChats(prev => prev.map(chat =>
      chat.id === activeChatId ? { ...chat, messages: [...chat.messages, { text: newMessage, source: 'gmail' }] } : chat
    ));
    setNewMessage('');
  };

  const activeChat = chats.find(c => c.id === activeChatId);

  return (
    <div className="clients-container">
      <aside className="chat-sidebar">
        <h2>Inbox</h2>
        <ul className="chat-list">
          {chats.map(chat => {
            const lastMessage = chat.messages[chat.messages.length - 1];
            return (
              <li
                key={chat.id}
                className={`chat-item ${chat.id === activeChatId ? 'active' : ''}`}
                onClick={() => setActiveChatId(chat.id)}
              >
                <strong>{chat.name}</strong>
                <p>
                  {lastMessage.text}
                  <img
                    src={`./logo/${chat.source}.png`}
                    alt={chat.source}
                    className="chat-logo-inline"
                  />
                </p>
              </li>
            );
          })}
        </ul>
      </aside>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="pipeline-board">
          {stages.map(stage => (
            <Droppable droppableId={stage} key={stage}>
              {(provided) => (
                <div
                  className="pipeline-column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3>{stage}</h3>
                  <div className="card-stack">
                    {chats
                      .filter(chat => chat.stage === stage)
                      .map((chat, index) => (
                        <Draggable draggableId={chat.id} index={index} key={chat.id}>
                          {(provided) => (
                            <div
                              className="chat-card"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <h4>{chat.name}</h4>
                              <p>{chat.email}</p>
                              <small>{chat.messages[0].text}</small>
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

      {activeChat && (
        <div className="chat-panel">
          <h3>Chat con {activeChat.name}</h3>
          <div className="chat-messages">
            {activeChat.messages.map((msg, idx) => (
              <div key={idx} className="chat-bubble">
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
