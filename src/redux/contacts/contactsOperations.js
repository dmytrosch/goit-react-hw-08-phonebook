import RestAPI from "../../utils/RestAPI";
import contactsActions from "./contactsActions";
import alertOperations from "../alert/alertOperations";

const getAllContacts = () => (dispatch) => {
    dispatch(contactsActions.getContactsStart());
    RestAPI.fetchAllContacts()
        .then((resp) => dispatch(contactsActions.getContactsSuccess(resp.data)))
        .catch(() =>
            dispatch(alertOperations.makeAlert("Oops! Something went wrong!"))
        );
};
const addContact = (name, number) => (dispatch) => {
    dispatch(contactsActions.addContactStart());
    RestAPI.addContact(name, number)
        .then((resp) => resp.data)
        .then((data) => dispatch(contactsActions.addContactSuccess(data)))
        .catch(() =>
            dispatch(alertOperations.makeAlert("Oops! Something went wrong!"))
        );
};
const removeContact = (id) => (dispatch) => {
    dispatch(contactsActions.removeContactStart());
    RestAPI.removeContact(id)
    .then(() =>
        dispatch(contactsActions.removeContactSuccess(id)))
    .catch(() =>
        dispatch(alertOperations.makeAlert("Oops! Something went wrong!")))
    
};

export default { getAllContacts, addContact, removeContact };
