import { combineReducers } from "redux";
import actions from "./contactsActions";
import actionsTypes from "./contactsActionsTypes";
import { v4 as uuidv4 } from "uuid";
import contactsActionsTypes from "./contactsActionsTypes";

const contacts = (state = [], { type, payload }) => {
    switch (type) {
        case actionsTypes.ADD_CONTACT:
            return [
                ...state,
                { id: uuidv4(), name: payload.name, number: payload.number },
            ];
        case actionsTypes.REMOVE_CONTACT:
            return state.filter((contact) => contact.id !== payload.id);
        default:
            return state;
    }
};

const filter = (state = "", { type, payload }) => {
    switch (type) {
        case contactsActionsTypes.FILTER_CONTACT:
            return payload.query;
        default:
            return state;
    }
};

const contactsReducer = combineReducers({
    items: contacts,
    filter,
});

export default contactsReducer;
