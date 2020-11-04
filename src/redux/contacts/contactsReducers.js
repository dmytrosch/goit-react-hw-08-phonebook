import { combineReducers } from "redux";
import actions from "./contactsActions";
import actionsTypes from "./contactsActionsTypes";
import { v4 as uuidv4 } from "uuid";

const contacts = (state = [], { type, payload }) => {
    switch (type) {
        case actionsTypes.ADD_CONTACT:
            return [
                ...state,
                { id: uuidv4(), name: payload.name, number: payload.number },
            ];
        default:
            return state;
    }
};

const contactsReducer = combineReducers({
    items: contacts,
});

export default contactsReducer;
