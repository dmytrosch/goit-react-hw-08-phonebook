import RestAPI from "../../utils/RestAPI";
import axios from "axios";
import { authActions } from "./index";
import alertOperations from "../alert/alertOperations";

const token = {
    set(tokenValue) {
        axios.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const registerUser = (credentials) => (dispatch) => {
    dispatch(authActions.registerStart());
    RestAPI.register(credentials)
        .then((response) => {
            token.set(response.data.token);
            dispatch(authActions.registerSuccess(response.data));
        })
        .catch(() =>
            dispatch(alertOperations.makeAlert("Oops! Something went wrong!"))
        );
};
const loginUser = (credentials) => (dispatch) => {
    dispatch(authActions.loginStart());
    RestAPI.login(credentials)
        .then((response) => {
            token.set(response.data.token);
            dispatch(authActions.loginSuccess(response.data));
        })
        .catch((error) =>
            dispatch(
                alertOperations.makeAlert(
                    error.response.status === 400
                        ? "Check your email or password and try login again"
                        : "Oops! Something went wrong"
                )
            )
        );
};
const getCurrentUser = () => (dispatch, getState) => {
    dispatch(authActions.getCurrentUserStart());
    const tokenValue = getState().auth.token;
    if (!tokenValue) {
        return;
    }
    token.set(tokenValue);
    RestAPI.getCurrentUser()
        .then((response) =>
            dispatch(authActions.getCurrentUserSuccess(response.data))
        )
        .catch(() =>
            dispatch(alertOperations.makeAlert("Oops! Something went wrong!"))
        );
};
const logout = () => (dispatch) => {
    dispatch(authActions.logoutStart());
    RestAPI.logout()
        .then((_) => {
            token.unset();
            dispatch(authActions.logoutSuccess());
        })
        .catch(() =>
            dispatch(alertOperations.makeAlert("Oops! Something went wrong!"))
        );
};

export default { registerUser, loginUser, getCurrentUser, logout };
