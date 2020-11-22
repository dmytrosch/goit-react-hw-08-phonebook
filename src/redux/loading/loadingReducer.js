import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "../contacts/contactsActions";
import { authActions } from "../auth/";

const startedLoading = () => true;
const finishedLoading = () => false;

const loading = createReducer(false, {
    [contactsActions.addContactStart]: startedLoading,
    [contactsActions.removeContactStart]: startedLoading,
    [contactsActions.getContactsStart]: startedLoading,
    [contactsActions.addContactSuccess]: finishedLoading,
    [contactsActions.removeContactSuccess]: finishedLoading,
    [contactsActions.getContactsSuccess]: finishedLoading,
    [contactsActions.addContactsError]: finishedLoading,
    [contactsActions.removeContactError]: finishedLoading,
    [contactsActions.getContactsError]: finishedLoading,
    [authActions.registerStart]: startedLoading,
    [authActions.loginStart]: startedLoading,
    [authActions.getCurrentUserStart]: startedLoading,
    [authActions.logoutStart]: startedLoading,
    [authActions.registerSuccess]: finishedLoading,
    [authActions.loginSuccess]: finishedLoading,
    [authActions.getCurrentUserSuccess]: finishedLoading,
    [authActions.logoutSuccess]: finishedLoading,
    [authActions.registerError]: finishedLoading,
    [authActions.loginError]: finishedLoading,
    [authActions.getCurrentUserError]: finishedLoading,
    [authActions.logoutError]: finishedLoading,
});

export default loading;
