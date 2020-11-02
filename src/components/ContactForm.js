import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

export default function ContactForm(props) {
    return (
        <form onSubmit={props.handler} className={styles.form}>
            <label className={styles.label}>
                Name <br/>
                <input type="text" name="nameInput" className={styles.input}/>
            </label>
            <label className={styles.label}>
                Number <br/>
                <input type="tel" id='phone' name="numberInput" className={styles.input} autoComplete='off'/>
            </label>
            <button type="submit" className={styles.submit}>Add contact</button>
        </form>
    );
}

ContactForm.propTypes = {
    handler: PropTypes.func.isRequired,
};
