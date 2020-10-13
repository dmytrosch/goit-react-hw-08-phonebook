import React from "react";
import PropTypes from "prop-types";

export default function Filter(props) {
    return (
        <label>
            Find contacts by name
            <input type="text" name="search" onChange={props.searchHandler} />
        </label>
    );
}

Filter.propTypes = {
    searchHandler: PropTypes.func.isRequired,
};
