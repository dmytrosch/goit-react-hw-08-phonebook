import { createAction } from "@reduxjs/toolkit";

const filter = createAction("contact/filter");

const addContactStart = createAction("contacts/addStart");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactsError = createAction("contacts/addError");

const removeContactStart = createAction("contacts/removeStart");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contact/removeError");

const getContactsStart = createAction("contacts/getStart");
const getContactsSuccess = createAction("contacts/getSuccess");
const getContactsError = createAction("contacts/getError");

export default {
    getContactsStart,
    getContactsSuccess,
    getContactsError,
    addContactStart,
    addContactSuccess,
    addContactsError,
    removeContactStart,
    removeContactSuccess,
    removeContactError,
    filter,
};
