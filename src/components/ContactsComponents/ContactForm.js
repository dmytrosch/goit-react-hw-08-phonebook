import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import alertOperations from "../../redux/alert/alertOperations";
import { connect } from "react-redux";
import formStyles from "./ContactForm.module.css";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from '../../redux/contacts/contactsSelectors';

class ContactForm extends React.Component {
    submitFormHandler = (event) => {
        event.preventDefault();
        const el = event.target.elements;
        const nameInput = el.nameInput;
        const numberInput = el.numberInput;
        if (!nameInput.value) {
            nameInput.classList.add(formStyles.inputWrong);
            this.props.setAlert("Enter name!");
            return;
        }
        nameInput.classList.remove(formStyles.inputWrong);
        if (!numberInput.value) {
            numberInput.classList.add(formStyles.inputWrong);
            this.props.setAlert("Enter phone number!");
            return;
        }
        numberInput.classList.remove(formStyles.inputWrong);
        if (!this.isNotUniqueName(nameInput.value)) {
            this.props.addContact(nameInput.value, numberInput.value);
            nameInput.value = "";
            numberInput.value = "";
        } else {
            this.props.setAlert(`${nameInput.value} is already in contact list!`);
            nameInput.classList.add(formStyles.inputWrong);
            nameInput.value = "";
        }
    };
    isNotUniqueName(name) {
        return this.props.contacts.some(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
        );
    }
    render() {
        return (
            <form onSubmit={this.submitFormHandler} className={styles.form}>
                <label className={styles.label}>
                    Name <br />
                    <input
                        type="text"
                        name="nameInput"
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    Number <br />
                    <input
                        type="tel"
                        id="phone"
                        name="numberInput"
                        className={styles.input}
                        autoComplete="off"
                    />
                </label>
                <button type="submit" className={styles.submit}>
                    Add contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
    addContact: contactsOperations.addContact,
    setAlert: alertOperations.makeAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
