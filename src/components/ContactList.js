import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import ContactItem from "./ContactItem";

class ContactList extends React.Component {
    findContact() {
        const { contacts, filter } = this.props;
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
    render() {
        const {contacts, filter } = this.props;
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
                            <ContactItem id={contact.id}/>
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
};

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
    filter: state.contacts.filter,
});

export default connect(mapStateToProps, null)(ContactList);
