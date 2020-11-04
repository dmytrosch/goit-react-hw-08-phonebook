import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", (name, number) => ({
    payload: {
        name,
        number,
    },
}));
const removeContact = createAction("contact/remove");
const filter = createAction("contact/filter");

// const addContact = (name, number) => ({
//     type: actionsTypes.ADD_CONTACT,
//     payload: {
//         name,
//         number,
//     },
// });

// const removeContact = (id) => ({
//     type: actionsTypes.REMOVE_CONTACT,
//     payload: {
//         id,
//     },
// });

// const filter = (query) => ({
//     type: actionsTypes.FILTER_CONTACT,
//     payload: {
//         query,
//     },
// });

export default { addContact, removeContact, filter };
