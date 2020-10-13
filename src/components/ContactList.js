import React from "react";
import PropTypes from "prop-types";

export default function ContactList(props) {
    const { deleteContact, contacts } = props;
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <span>
                        {contact.name}: {contact.number}
                    </span>
                    <button onClick={deleteContact} data-id={contact.id}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

ContactList.defaultProps = {
    filter: null,
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
