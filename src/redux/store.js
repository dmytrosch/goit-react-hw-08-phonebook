// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducers";
import loadingReducer from "./loading/loadingReducer";
import alertReducer from "./alert/alertReducer";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        alert: alertReducer,
        loading: loadingReducer,
    },
});

export default store;
