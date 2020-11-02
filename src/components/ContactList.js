import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ContactList(props) {
    const { deleteContact, contacts } = props;
    return (
        <TransitionGroup className={styles.list} component="ul">
            {contacts.map((contact) => (
                <CSSTransition
                    key={contact.id}
                    timeout={250}
                    classNames="contact-item"
                >
                    <li className={styles.item}>
                        <span>{contact.name}</span>{" "}
                        <span>{contact.number}</span>
                        <button
                            className={styles.button}
                            onClick={deleteContact}
                            data-id={contact.id}
                        >
                            X
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

ContactList.defaultProps = {
    filter: null,
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
