import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

function ContactItem({ deleteContact, name, number }) {
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
    const contact = contactsSelectors.getContactById(state, ownProps.id);
    return { ...contact };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteContact: () =>
        dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
