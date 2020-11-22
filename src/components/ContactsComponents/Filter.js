import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import contactsActions from "../../redux/contacts/contactsActions";
import { connect } from "react-redux";

function Filter(props) {
    return (
        <form className={styles.form}>
            <label className={styles.label} data-label="last">
                Find contacts by name
                <input
                    className={styles.input}
                    type="text"
                    name="search"
                    onChange={(e) => props.searchHandler(e.target.value)}
                    placeholder="Enter name..."
                />
            </label>
        </form>
    );
}

Filter.propTypes = {
    searchHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    searchHandler: contactsActions.filter,
};

export default connect(null, mapDispatchToProps)(Filter);
