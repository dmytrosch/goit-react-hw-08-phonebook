import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./authActions";

const user = createReducer(
    {},
    {
        [authActions.registerSuccess]: (_, action) => action.payload.user,
        [authActions.loginSuccess]: (_, action) => action.payload.user,
        [authActions.getCurrentUserSuccess]: (_, action) => action.payload,
        [authActions.logoutSuccess]: () => ({}),
    }
);
const token = createReducer("", {
    [authActions.registerSuccess]: (_, action) => action.payload.token,
    [authActions.loginSuccess]: (_, action) => action.payload.token,
    [authActions.logoutSuccess]: () => "",
});
const error = createReducer("", {
    [authActions.registerError]: (_, action) => action.payload,
});

const authReducer = combineReducers({
    user,
    token,
    error,
});

export default authReducer;
