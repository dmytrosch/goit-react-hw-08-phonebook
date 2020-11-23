import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import Loader from "./Loader";
import Layout from "./Layout";
import Alert from "./Alert";
import PrivateRoute from "./RouteComponents/PrivateRoute";
import PublicRoute from "./RouteComponents/PublicRoute";

import loadingSelectors from "../redux/loading/loadingSelectors";
import { authOperations, authSelectors } from "../redux/auth/";
import "./animation.css";

const AsyncLogin = lazy(() => import("./AuthComponents/Login"));
const AsyncSignup = lazy(() => import("./AuthComponents/Signup"));
const AsyncContacts = lazy(() => import("./ContactsComponents/Contacts"));

const semiTransparentStyle = {
    opacity: "0.5",
};

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
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <CSSTransition
                    in={true}
                    appear={true}
                    unmountOnExit
                    timeout={250}
                    classNames="container"
                >
                    <Layout styling={loading ? semiTransparentStyle : {}}>
                        <Switch>
                            <PublicRoute
                                path="/login"
                                exact
                                restricted={true}
                                component={AsyncLogin}
                            />
                            <PublicRoute
                                path="/signup"
                                exact
                                restricted={true}
                                component={AsyncSignup}
                            />
                            <PrivateRoute
                                path="/contacts"
                                exact
                                component={AsyncContacts}
                            />
                            <Redirect to="/contacts" />
                        </Switch>
                    </Layout>
                </CSSTransition>
                <Alert />
                {loading && <Loader />}
            </Suspense>
        </BrowserRouter>
    );
}

export default Phonebook;
