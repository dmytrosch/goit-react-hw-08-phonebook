// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/contactsReducers";
import alertReducer from "./alert/alertReducer";

const store = configureStore({
    reducer: {
        contacts: contactReducer,
        alert: alertReducer,
    },
});

export default store;
