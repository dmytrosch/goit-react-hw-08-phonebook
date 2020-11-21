// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducers";
import loadingReducer from "./loading/loadingReducer";
import alertReducer from "./alert/alertReducer";
import { authReducer } from "./auth/";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        contacts: contactsReducer,
        alert: alertReducer,
        loading: loadingReducer,
    },
});
const persistor = persistStore(store);

export { store, persistor };
