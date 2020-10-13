import React from "react";
import PropTypes from 'prop-types';

export default function ContactForm(props) {
    return (
        <form onSubmit={props.handler}>
            <label>
                Name <input type="text" name="nameInput" />
            </label>
            <label>
                Number <input type="tel" name="numberInput" />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
}

ContactForm.propTypes = {
    handler: PropTypes.func.isRequired,
};
