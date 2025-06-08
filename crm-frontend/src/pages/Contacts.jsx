import '../styles/Page.css';

const Contacts = () => {
  const contacts = [
    { name: 'Juan Pérez', phone: '8888-1234' },
    { name: 'Ana López', phone: '8675-4321' },
  ];

  return (
    <div>
      <h1>Contactos</h1>
      <ul>
        {contacts.map((contact, i) => (
          <li key={i}>
            <strong>{contact.name}</strong> - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Contacts;