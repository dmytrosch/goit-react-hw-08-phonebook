import alertActions from "./alertActions";

const makeAlert = (message) => (dispatch) => {
    dispatch(alertActions.alert(message));
    setTimeout(() => dispatch(alertActions.alert("")), 2000);
};
export default { makeAlert };
