import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./alertActions";

const alertReducer = createReducer("", {
    [alertActions.alert]: (_, action) => action.payload,
});

export default alertReducer;
