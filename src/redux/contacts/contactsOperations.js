import axios from "axios";
import contactsActions from "./contactsActions";

const BASE_URL = "http://localhost:5252/contacts";

const getAllContacts = () => (dispatch) => {
    dispatch(contactsActions.getContactsStart());
    axios
        .get(BASE_URL)
        .then((resp) => dispatch(contactsActions.getContactsSuccess(resp.data)))
        .catch((error) => dispatch(contactsActions.getContactsError(error)));
};
const addContact = (name, number) => (dispatch) => {
    dispatch(contactsActions.addContactStart());
    axios
        .post(BASE_URL, { name, number })
        .then((resp) => resp.data)
        .then((data) => dispatch(contactsActions.addContactSuccess(data)))
        .catch((error) => dispatch(contactsActions.addContactError(error)));
};
const removeContact = (id) => (dispatch) => {
    dispatch(contactsActions.removeContactStart());
    axios
        .delete(BASE_URL+`/${id}`)
        .then(dispatch(contactsActions.removeContactSuccess(id)));
};

export default { getAllContacts, addContact, removeContact };
