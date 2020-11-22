import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import ContactItem from "./ContactItem";

function ContactList() {
    const contacts = useSelector((state) =>
        contactsSelectors.getAllContacts(state)
    );
    const filter = useSelector((state) =>
        contactsSelectors.getFilterParam(state)
    );
    const filteredContacts = useSelector((state) =>
        contactsSelectors.getFilteredContacts(state)
    );
    const contactsToRender = filter ? filteredContacts : contacts;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(contactsOperations.getAllContacts());
    }, []);
    return (
        <>
            <TransitionGroup className={styles.list} component="ul">
                {contactsToRender.map((contact) => (
                    <CSSTransition
                        key={contact.id}
                        timeout={250}
                        classNames="contact-item"
                    >
                        <ContactItem id={contact.id} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
            {filter && filteredContacts.length === 0 && (
                <p>There's no such contact</p>
            )}{" "}
        </>
    );
}

ContactList.defaultProps = {
    filter: null,
};

export default ContactList;
