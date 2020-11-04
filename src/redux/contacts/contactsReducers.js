import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import contactsActions from "./contactsActions";
import {
    readContactsFromLocalStorage,
    setContactsToLocalStorage,
} from "../../utils/localStorage";

const addContact = (state, action) => {
    const contacts = [
        ...state,
        {
            id: uuidv4(),
            name: action.payload.name,
            number: action.payload.number,
        },
    ];
    setContactsToLocalStorage(contacts);
    return contacts;
};
const removeContact = (state, action) => {
    const newContactsList = state.filter(
        (contact) => contact.id !== action.payload
    );
    setContactsToLocalStorage(newContactsList);
    return newContactsList;
};

const contacts = createReducer(readContactsFromLocalStorage(), {
    [contactsActions.addContact]: addContact,
    [contactsActions.removeContact]: removeContact,
});
const filter = createReducer("", {
    [contactsActions.filter]: (_, action) => action.payload.query,
});

const contactsReducer = combineReducers({
    items: contacts,
    filter,
});

export default contactsReducer;
