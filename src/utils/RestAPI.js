import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const register = (credentials) => {
    return axios.post("/users/signup", credentials);
};
const login = (credentials) => {
    return axios.post("/users/login", credentials);
};
const getCurrentUser = () => {
    return axios.get("/users/current");
};
const logout = () => {
    return axios.post("/users/logout");
};

// const fetchAllContacts = () => (dispatch) => {
//     dispatch(contactsActions.getContactsStart());
//     axios
//         .get(BASE_URL)
//         .then((resp) => dispatch(contactsActions.getContactsSuccess(resp.data)))
//         .catch((error) => dispatch(contactsActions.getContactsError(error)));
// };
// const addContact = (name, number) => (dispatch) => {
//     dispatch(contactsActions.addContactStart());
//     axios
//         .post(BASE_URL, { name, number })
//         .then((resp) => resp.data)
//         .then((data) => dispatch(contactsActions.addContactSuccess(data)))
//         .catch((error) => dispatch(contactsActions.addContactError(error)));
// };
// const removeContact = (id) => (dispatch) => {
//     dispatch(contactsActions.removeContactStart());
//     axios
//         .delete(BASE_URL + `/${id}`)
//         .then(dispatch(contactsActions.removeContactSuccess(id)));
// };

export default { register, login, getCurrentUser, logout };
