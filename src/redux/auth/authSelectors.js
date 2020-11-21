const isAuthenticated = (state) => (state.auth.token ? true : false);
const getUser = (state) => state.auth.user;

export default { isAuthenticated, getUser };
