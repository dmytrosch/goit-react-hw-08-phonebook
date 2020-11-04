import { SET_ALERT } from "./alertActionsTypes";

const alert = (text) => ({
    type: SET_ALERT,
    payload: {
        text,
    },
});

export default { alert };
