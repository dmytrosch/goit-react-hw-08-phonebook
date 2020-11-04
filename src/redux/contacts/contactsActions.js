import actionsTypes from "./contactsActionsTypes";

const addContact = (name, number) => ({
    type: actionsTypes.ADD_CONTACT,
    payload: {
        name,
        number,
    },
});

const removeContact = (id) => ({
    type: actionsTypes.REMOVE_CONTACT,
    payload: {
        id,
    },
});

export default {addContact, removeContact}
