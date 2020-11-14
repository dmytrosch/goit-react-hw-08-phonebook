import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import alertActions from "../redux/alert/alertActions";
import { connect } from "react-redux";
import formStyles from "./ContactForm.module.css";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from '../redux/contacts/contactsSelectors';

class ContactForm extends React.Component {
    submitFormHandler = (event) => {
        event.preventDefault();
        const el = event.target.elements;
        const nameInput = el.nameInput;
        const numberInput = el.numberInput;
        if (!nameInput.value) {
            nameInput.classList.add(formStyles.inputWrong);
            this.makeAlert("Enter name!");
            return;
        }
        nameInput.classList.remove(formStyles.inputWrong);
        if (!numberInput.value) {
            numberInput.classList.add(formStyles.inputWrong);
            this.makeAlert("Enter phone number!");
            return;
        }
        numberInput.classList.remove(formStyles.inputWrong);
        if (!this.isNotUniqueName(nameInput.value)) {
            this.props.addContact(nameInput.value, numberInput.value);
            nameInput.value = "";
            numberInput.value = "";
        } else {
            this.makeAlert(`${nameInput.value} is already in contact list!`);
            nameInput.classList.add(formStyles.inputWrong);
            nameInput.value = "";
        }
    };
    makeAlert = (text) => {
        this.props.setAlert(text);
        setTimeout(() => this.props.setAlert(""), 2000);
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
    setAlert: alertActions.alert,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
