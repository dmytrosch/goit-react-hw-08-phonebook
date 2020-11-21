import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Alert from "./Alert";
import Signup from "./Signup";
import Login from "./Login";
import UserMenu from "./UserMenu";
import styles from "./App.module.css";
import loadingSelectors from "../redux/loading/loadingSelectors";
import { authOperations, authSelectors } from "../redux/auth/";
import "./animation.css";

function Phonebook() {
    const isAuthenticated = useSelector((state) =>
        authSelectors.isAuthenticated(state)
    );
    const loading = useSelector((state) => loadingSelectors.isLoading(state));
    const dispatch = useDispatch();
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(authOperations.getCurrentUser());
        }
    }, []);
    return (
        <>
            {loading && <p>loading...</p>}
            <CSSTransition
                in={true}
                appear={true}
                unmountOnExit
                timeout={250}
                classNames="container"
            >
                <section className={styles.container}>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={725}
                        unmountOnExit={true}
                        classNames="title"
                    >
                        <h1 className={styles.title}>Phonebook</h1>
                    </CSSTransition>
                    <UserMenu />
                    <Login />
                    {/* <Signup/> */}
                    {/* <ContactForm /> */}
                    <h2 className={styles.contacts}>Contacts</h2>
                    <Filter />
                    <ContactList />
                </section>
            </CSSTransition>
            <Alert />
        </>
    );
}

export default Phonebook;
