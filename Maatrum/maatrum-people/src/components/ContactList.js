import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props.contacts); // Check if contacts are received

  const deleteContactHandler = (id) => {
    props.getContactId(id); // Call the delete handler passed from App.js
  };

  // Check if contacts are available before rendering
  const renderContactList = props.contacts && props.contacts.length > 0 ? (
    props.contacts.map((contact) => {
      return (
        <ContactCard
          contact={contact}
          key={contact.id}
          clickhandler={deleteContactHandler}
        />
      );
    })
  ) : (
    <div>No contacts available</div>
  );

  return (
    <div className="ui celled list">
      {renderContactList}
      
      {/* Link to AddContact page */}
      <Link to="/add">
        <button className="ui button right">Add Contact</button>
      </Link>
    </div>
  );
};

export default ContactList;
