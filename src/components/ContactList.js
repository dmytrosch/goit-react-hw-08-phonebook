import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contactsSelectors";

import ContactItem from "./ContactItem";

class ContactList extends React.Component {
    // componentDidMount() {
    //     if(this.props.isAuthenticated){
    //         this.props.history.replace('/login')
    //     }
    //     this.props.onFetchContacts();
    // }

    // findContact() {
    //     const { contacts, filter } = this.props;
    //     return contacts.filter((contact) =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase())
    //     );
    // }
    render() {
        const { contacts, filter, filteredContacts } = this.props;
        const contactsToRender = filter ? filteredContacts : contacts;
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
}

ContactList.defaultProps = {
    filter: null,
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getAllContacts(state),
    filter: contactsSelectors.getFilterParam(state),
    filteredContacts: contactsSelectors.getFilteredContacts(state),
    // isAuthenticated: 
});
const mapDispatchToProps = {
    onFetchContacts: contactsOperations.getAllContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
