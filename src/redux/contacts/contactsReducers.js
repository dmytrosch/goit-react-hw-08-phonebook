import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
    const contacts = [...state, action.payload];

    return contacts;
};
const removeContact = (state, action) => {
    const newContactsList = state.filter(
        (contact) => contact.id !== action.payload
    );
    return newContactsList;
};


const contacts = createReducer([], {
    [contactsActions.addContactSuccess]: addContact,
    [contactsActions.removeContactSuccess]: removeContact,
    [contactsActions.getContactsSuccess]: (_, action) => action.payload,
});
const filter = createReducer("", {
    [contactsActions.filter]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
    items: contacts,
    filter,
});

export default contactsReducer;
