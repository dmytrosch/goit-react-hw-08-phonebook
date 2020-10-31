import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export default function ContactList(props) {
    const { deleteContact, contacts } = props;
    return (
        <ul styles={styles.list}>
            {contacts.map((contact) => (
                <li key={contact.id} className={styles.item}>
                    <span>{contact.name}</span> <span>{contact.number}</span>
                    <button
                        className={styles.button}
                        onClick={deleteContact}
                        data-id={contact.id}
                    >
                        X
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
