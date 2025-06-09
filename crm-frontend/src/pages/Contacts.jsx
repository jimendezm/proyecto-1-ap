import React, { useState } from 'react';
import '../styles/Page.css';
import '../styles/Contacts.css';

const Contacts = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const contactList = [
    { email: 'e.krall@emailmarket.io', name: 'Eugene Krall', phone: '+1 555 123 456', reg_date: 'October 4, 2018', status: 'Added' },
    { email: 'dimadim220@gmail.com', name: 'Dmitriy', phone: '+1 555 654 321', reg_date: 'April 10, 2018', status: 'Added' },
    { email: 'lt@mercitoken.com', name: 'Liza Thomas', phone: '+1 555 888 444', reg_date: 'March 15, 2018', status: 'Added' },
    { email: 'f.reed@bravepepper.com', name: 'Fred Reed', phone: '+1 555 111 222', reg_date: 'March 11, 2018', status: 'Added' },
    { email: 'ws@mercitoken.com', name: 'William Scott', phone: '+1 555 777 999', reg_date: 'March 10, 2018', status: 'Added' },
    { email: 'ana.perez@mail.com', name: 'Ana Pérez', phone: '+1 555 111 333', reg_date: 'May 2, 2019', status: 'Added' },
    { email: 'marco.lee@mail.com', name: 'Marco Lee', phone: '+1 555 222 444', reg_date: 'June 6, 2019', status: 'Added' },
    { email: 'clara.wu@mail.com', name: 'Clara Wu', phone: '+1 555 333 555', reg_date: 'July 9, 2019', status: 'Added' },
    { email: 'lucas.hunt@mail.com', name: 'Lucas Hunt', phone: '+1 555 444 666', reg_date: 'August 1, 2020', status: 'Added' },
    { email: 'nina.ross@mail.com', name: 'Nina Ross', phone: '+1 555 555 777', reg_date: 'September 3, 2020', status: 'Added' },
    { email: 'brian.kim@mail.com', name: 'Brian Kim', phone: '+1 555 666 888', reg_date: 'October 5, 2020', status: 'Added' },
    { email: 'zoe.gray@mail.com', name: 'Zoe Gray', phone: '+1 555 777 999', reg_date: 'November 8, 2020', status: 'Added' },
    { email: 'paul.jones@mail.com', name: 'Paul Jones', phone: '+1 555 888 000', reg_date: 'December 10, 2020', status: 'Added' },
    { email: 'lara.fox@mail.com', name: 'Lara Fox', phone: '+1 555 999 111', reg_date: 'January 15, 2021', status: 'Added' },
    { email: 'david.yuan@mail.com', name: 'David Yuan', phone: '+1 555 101 121', reg_date: 'February 18, 2021', status: 'Added' },
    { email: 'emma.garcia@mail.com', name: 'Emma García', phone: '+1 555 131 141', reg_date: 'March 20, 2021', status: 'Added' },
    { email: 'alex.nguyen@mail.com', name: 'Alex Nguyen', phone: '+1 555 151 161', reg_date: 'April 23, 2021', status: 'Added' },
    { email: 'mia.jordan@mail.com', name: 'Mia Jordan', phone: '+1 555 171 181', reg_date: 'May 26, 2021', status: 'Added' },
    { email: 'ryan.clark@mail.com', name: 'Ryan Clark', phone: '+1 555 191 201', reg_date: 'June 29, 2021', status: 'Added' },
    { email: 'eva.mendoza@mail.com', name: 'Eva Mendoza', phone: '+1 555 211 221', reg_date: 'July 1, 2021', status: 'Added' },
    { email: 'leo.ramos@mail.com', name: 'Leo Ramos', phone: '+1 555 231 241', reg_date: 'August 3, 2021', status: 'Added' },
    { email: 'julie.baker@mail.com', name: 'Julie Baker', phone: '+1 555 251 261', reg_date: 'September 6, 2021', status: 'Added' },
    { email: 'tom.smith@mail.com', name: 'Tom Smith', phone: '+1 555 271 281', reg_date: 'October 9, 2021', status: 'Added' },
    { email: 'kate.hall@mail.com', name: 'Kate Hall', phone: '+1 555 291 301', reg_date: 'November 12, 2021', status: 'Added' },
    { email: 'dan.liu@mail.com', name: 'Dan Liu', phone: '+1 555 311 321', reg_date: 'December 15, 2021', status: 'Added' },
    { email: 'sara.rivera@mail.com', name: 'Sara Rivera', phone: '+1 555 331 341', reg_date: 'January 18, 2022', status: 'Added' },
    { email: 'max.turner@mail.com', name: 'Max Turner', phone: '+1 555 351 361', reg_date: 'February 21, 2022', status: 'Added' },
    { email: 'olivia.brooks@mail.com', name: 'Olivia Brooks', phone: '+1 555 371 381', reg_date: 'March 24, 2022', status: 'Added' },
    { email: 'chris.patel@mail.com', name: 'Chris Patel', phone: '+1 555 391 401', reg_date: 'April 27, 2022', status: 'Added' },
    { email: 'bella.lopez@mail.com', name: 'Bella Lopez', phone: '+1 555 411 421', reg_date: 'May 30, 2022', status: 'Added' },
  ];

  return (
    <div className="page">
      <div className="contacts-header">
        <h1>Contacts</h1>
        <div className="contacts-actions">
          <button className="btn-green" onClick={() => setShowAddModal(true)}>+ Add contacts</button>
          <button className="btn-light" onClick={() => setShowCampaignModal(true)}>Create a campaign</button>
          <button className="btn-light">Actions ▼</button>
        </div>
      </div>

      {/* Tabla de contactos */}
      <div className="contacts-table-container">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Email address</th>
              <th>Phone</th>
              <th>Name</th>
              <th>Reg. Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((contact, index) => (
              <tr key={index}>
                <td><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
                <td>{contact.phone}</td>
                <td>{contact.name}</td>
                <td>{contact.reg_date}</td>
                <td>{contact.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Add Contact */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Contact</h2>
              <button className="close-btn" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form className="modal-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" />
              <button type="submit" className="btn-green">Save</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Create Campaign */}
      {showCampaignModal && (
        <div className="modal-backdrop" onClick={() => setShowCampaignModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create Campaign</h2>
              <button className="close-btn" onClick={() => setShowCampaignModal(false)}>×</button>
            </div>
            <form className="modal-form">
              <input type="text" placeholder="Campaign Name" required />
              <textarea placeholder="Description" rows="4"></textarea>
              <button type="submit" className="btn-green">Create</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
