import React from "react";
import PropTypes from "prop-types";
import styles from './ContactForm.module.css'

export default function Filter(props) {
    return (
        <form className={styles.form}>
        <label className={styles.label} data-label='last'>
            Find contacts by name
            <input className={styles.input} type="text" name="search" onChange={props.searchHandler} placeholder='Enter name...'/>
        </label></form>
    );
}

Filter.propTypes = {
    searchHandler: PropTypes.func.isRequired,
};
