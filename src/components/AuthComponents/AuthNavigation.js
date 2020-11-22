import React from "react";
import { NavLink } from "react-router-dom";
import authStyles from "./Auth.module.css";

function AuthNavigation() {
    return (
        <nav className={authStyles.container}>
            <NavLink
                to="/signup"
                className={authStyles.text}
                activeClassName={authStyles.textActive}
            >
                Signup
            </NavLink>
            <NavLink
                to="/login"
                className={authStyles.text}
                activeClassName={authStyles.textActive}
            >
                Login
            </NavLink>
        </nav>
    );
}

export default AuthNavigation;
