import { createStore, combineReducers } from "redux";
import contactReducer from "./contacts/contactsReducers";
import alertReducer from "./alert/alertReducer";

const rootReducer = combineReducers({
    contacts: contactReducer,
    alert: alertReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
