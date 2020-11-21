import { createAction } from "@reduxjs/toolkit";

const registerStart = createAction("auth/registerStart");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginStart = createAction("auth/loginStart");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const getCurrentUserStart = createAction("auth/getCurrentUserStart");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

const logoutStart = createAction("auth/logoutStart");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

export default {
    logoutStart,
    logoutSuccess,
    logoutError,
    registerStart,
    registerSuccess,
    registerError,
    loginStart,
    loginSuccess,
    loginError,
    getCurrentUserStart,
    getCurrentUserSuccess,
    getCurrentUserError,
};
