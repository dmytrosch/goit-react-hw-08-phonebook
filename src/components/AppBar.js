import { CSSTransition } from "react-transition-group";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserMenu from "./AuthComponents/UserMenu";
import AuthNavigation from "./AuthComponents/AuthNavigation";
import { authSelectors } from "../redux/auth/";
import styles from "./App.module.css";

function AppBar() {
    const isAuthenticated = useSelector((state) =>
        authSelectors.isAuthenticated(state)
    );
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={725}
            unmountOnExit={true}
            classNames="title"
        >
            <header className={styles.header}>
                <NavLink to="/contacts">
                    <h1 className={styles.title}>Phonebook</h1>
                </NavLink>
                <>{isAuthenticated ? <UserMenu /> : <AuthNavigation />}</>
            </header>
        </CSSTransition>
    );
}

export default AppBar;
