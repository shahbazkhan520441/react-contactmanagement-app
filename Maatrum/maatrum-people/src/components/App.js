import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    const newContact = { id: uuidv4(), ...contact };
    const updatedContacts = [...contacts, newContact];

    // Update the state and localStorage
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  const removeContactHandler = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    // Update the state and localStorage
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
