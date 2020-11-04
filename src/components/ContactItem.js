import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contactsActions";

function ContactItem({deleteContact, name, number}) {
    return (
        <li className={styles.item}>
            <span>{name}</span> <span>{number}</span>
            <button className={styles.button} onClick={deleteContact}>
                X
            </button>
        </li>
    );
}
const mapStateToProps = (state, ownProps) => {
    const contact = state.contacts.items.find(
        (contact) => contact.id === ownProps.id
    );
    return { ...contact };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteContact: () => dispatch(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
