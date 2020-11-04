import { SET_ALERT } from "./alertActionsTypes";

const alertReducer = (state = "", { payload, type }) => {
    switch (type) {
        case SET_ALERT:
            return payload.text;
        default:
            return state;
    }
};

export default alertReducer;
