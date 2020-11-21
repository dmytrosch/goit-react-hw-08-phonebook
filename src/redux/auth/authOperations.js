import RestAPI from "../../utils/RestAPI";
import axios from "axios";
import authActions from "./authActions";

const token = {
    set(tokenValue) {
        console.log(axios);
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
        .catch((error) => dispatch(authActions.registerError(error.message)));
};
const loginUser = (credentials) => (dispatch) => {
    dispatch(authActions.loginStart());
    RestAPI.login(credentials)
        .then((response) => {
            token.set(response.data.token);
            dispatch(authActions.loginSuccess(response.data));
        })
        .catch((error) => dispatch(authActions.loginError(error.message)));
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
        .catch((error) =>
            dispatch(authActions.getCurrentUserError(error.message))
        );
};
const logout = () => (dispatch) => {
    dispatch(authActions.logoutStart());
    RestAPI.logout()
        .then((_) => {
            token.unset();
            dispatch(authActions.logoutSuccess());
        })
        .catch((error) => dispatch(authActions.logoutError(error)));
};

export default { registerUser, loginUser, getCurrentUser, logout };
