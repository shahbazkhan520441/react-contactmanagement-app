import React from "react";
import PropTypes from "prop-types";
import image from "../images/logo192.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact || {};
    return (
        <div className="item">
            <div className="content">
                <div className="header">{name || "Unknown Name"}</div>
                <div>{email || "No Email Provided"}</div>
            </div>
            <button
                className="ui button red"
                onClick={() => props.clickhandler(id)}
                aria-label={`Delete contact ${name}`}
            >
                <i className="trash icon"></i> Delete
            </button>
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    clickhandler: PropTypes.func.isRequired,
};

export default ContactCard;
