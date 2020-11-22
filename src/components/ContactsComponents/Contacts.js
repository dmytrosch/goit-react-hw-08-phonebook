import React from "react";
import styles from "../App.module.css";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

function Contacts(props) {
    return (
        <>
            <ContactForm />
            <h3 className={styles.contacts}>Contacts</h3>
            <Filter />
            <ContactList />
        </>
    );
}

export default Contacts
