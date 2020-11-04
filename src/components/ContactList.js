import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contactsActions";

class ContactList extends React.Component {
    findContact() {
        console.log('in finding');
        const { contacts, filter } = this.props;
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
    render() {
        const { deleteContact, contacts, filter } = this.props;
        const contactsToRender = filter ? this.findContact() : contacts;
        return (
            <>
                <TransitionGroup className={styles.list} component="ul">
                    {contactsToRender.map((contact) => (
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
                                    onClick={() => deleteContact(contact.id)}
                                >
                                    X
                                </button>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                {filter && this.findContact().length === 0 && (
                    <p>There's no such contact</p>
                )}{" "}
            </>
        );
    }
}

ContactList.defaultProps = {
    filter: null,
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
    filter: state.contacts.filter,
});
const mapDispatchToProps = {
    deleteContact: contactsActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
