import { createReducer } from '@reduxjs/toolkit';
import contactsActions from '../contacts/contactsActions'

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
});

export default loading

