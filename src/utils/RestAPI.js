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

const fetchAllContacts = () => {
    return axios.get("/contacts");
};
const addContact = (name, number) => {
    return axios.post("/contacts", { name, number });
};
const removeContact = (id) => {
    console.log(id);
    return axios.delete("/contacts/" + id);
};

export default {
    removeContact,
    addContact,
    fetchAllContacts,
    register,
    login,
    getCurrentUser,
    logout,
};
