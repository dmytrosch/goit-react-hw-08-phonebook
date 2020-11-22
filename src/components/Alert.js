import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import alertSelectors from "../redux/alert/alertSelectors";

const style = {
    minWidth: "300px",
    paddingLeft: "5px",
    paddingRight: "5px",
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

const Alert = ({ text }) => (
    <CSSTransition
        in={text ? true : false}
        unmountOnExit
        classNames="alert"
        timeout={250}
    >
        <div style={style}>
            <p>{text}</p>
        </div>
    </CSSTransition>
);

Alert.propTypes = {
    text: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
    text: alertSelectors.getAlertText(state),
});

export default connect(mapStateToProps, null)(Alert);
