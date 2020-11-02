import React from "react";
import PropTypes from "prop-types";

const style = {
    width: "300px",
    height: "55px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    backgroundColor: "lightcoral",
    color: "white",
    position: "absolute",
    top: "10px",
    right: "10px",
};

export default function Alert({ text }) {
    return (
        <div style={style}>
            <p>{text}</p>
        </div>
    );
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
};
