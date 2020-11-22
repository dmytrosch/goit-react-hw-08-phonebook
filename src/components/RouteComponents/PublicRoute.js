import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth/";

function PublicRoute({ component, restricted, ...routeProps }) {
    const Component = component;
    const isAuthenticated = useSelector((state) =>
        authSelectors.isAuthenticated(state)
    );
    return (
        <Route
            {...routeProps}
            render={(props) =>
                isAuthenticated && restricted ? (
                    <Redirect to="/contacts" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default PublicRoute;
