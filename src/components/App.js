import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Alert from "./Alert";
import styles from "./App.module.css";
import formStyles from "./ContactForm.module.css";
import "./animation.css";

export default class Phonebook extends React.Component {
    state = {
        contacts: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
        filter: "",
        alert: "",
    };
    isNotUniqueName(name) {
        return this.state.contacts.some(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
        );
    }
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
        if (!numberInput.value) {
            numberInput.classList.add(formStyles.inputWrong);
            this.makeAlert("Enter phone number!");
            return;
        }
        if (!this.isNotUniqueName(nameInput.value)) {
            this.setState({
                contacts: [
                    ...this.state.contacts,
                    {
                        id: uuidv4(),
                        name: nameInput.value,
                        number: numberInput.value,
                    },
                ],
            });
            nameInput.value = "";
            nameInput.classList.remove(formStyles.inputWrong);
            numberInput.value = "";
            numberInput.classList.remove(formStyles.inputWrong);
        } else {
            this.makeAlert(`${nameInput.value} is already in contact list!`);
            nameInput.classList.add(formStyles.inputWrong);
            nameInput.value = "";
        }
    };
    makeAlert = (text) => {
        this.setState({
            alert: text,
        });
        setTimeout(() => this.setState({ alert: "" }), 2000);
    };
    searchInputHandler = (event) => {
        this.setState({ filter: event.target.value });
    };
    onDeleteBtnHandler = (event) => {
        const contactId = event.target.dataset.id;
        this.setState((prevState) => {
            return {
                contacts: prevState.contacts.filter(
                    (contact) => contact.id !== contactId
                ),
            };
        });
    };
    findContact() {
        const { contacts, filter } = this.state;
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
    componentDidMount() {
        this.readContactsFromLocalStorage();
    }
    componentDidUpdate() {
        this.setContactsToLocalStorage();
    }
    readContactsFromLocalStorage() {
        const contactsString = localStorage.getItem("contacts");
        const contactsObj = JSON.parse(contactsString);
        if (contactsObj) {
            this.setState({ contacts: contactsObj });
        }
    }
    setContactsToLocalStorage() {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    render() {
        const { contacts, filter, alert } = this.state;
        return (
            <>
                <CSSTransition
                    in={true}
                    appear={true}
                    unmountOnExit
                    timeout={250}
                    classNames="container"
                >
                    <section className={styles.container}>
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={725}
                            unmountOnExit={true}
                            classNames="title"
                        >
                            <h1 className={styles.title}>Phonebook</h1>
                        </CSSTransition>
                        <ContactForm handler={this.submitFormHandler} />
                        <h2 className={styles.contacts}>Contacts</h2>
                        <Filter searchHandler={this.searchInputHandler} />
                        <ContactList
                            contacts={filter ? this.findContact() : contacts}
                            deleteContact={this.onDeleteBtnHandler}
                        />
                        {filter && this.findContact().length === 0 && (
                            <p>There's no such contact</p>
                        )}
                    </section>
                </CSSTransition>
                <CSSTransition
                    in={alert ? true : false}
                    unmountOnExit
                    classNames="alert"
                    timeout={250}
                >
                    <Alert text={alert} />
                </CSSTransition>
            </>
        );
    }
}
