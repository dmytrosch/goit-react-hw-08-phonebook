import { createSelector } from "@reduxjs/toolkit";

const getAllContacts = (state) => state.contacts.items;
const getFilterParam = (state) => state.contacts.filter;
const getContactById = (state, contactId) => {
    const contacts = getAllContacts(state);
    return contacts.find((contact) => contact.id === contactId);
};
const getFilteredContacts = createSelector(
    [getAllContacts, getFilterParam],
    (contacts, filter) =>
        contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        )
);

export default {
    getAllContacts,
    getContactById,
    getFilterParam,
    getFilteredContacts,
};
