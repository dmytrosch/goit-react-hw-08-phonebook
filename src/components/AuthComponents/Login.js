import React from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth/";
import alertOperations from "../../redux/alert/alertOperations";
import formStyles from "../ContactsComponents/ContactForm.module.css";
import styles from "../App.module.css";

class Login extends React.Component {
    onSubmitHandler = (event) => {
        event.preventDefault();
        const element = event.target;
        const userEmail = element.userEmail;
        const userPassword = element.userPassword;
        if (!userEmail.value) {
            userEmail.classList.add(formStyles.inputWrong);
            this.props.setAlert("Enter email!");
            return;
        }
        userEmail.classList.remove(formStyles.inputWrong);
        if (!userPassword.value) {
            userPassword.classList.add(formStyles.inputWrong);
            this.props.setAlert("Enter password!");
            return;
        }
        userPassword.classList.remove(formStyles.inputWrong);
        this.props.loginHandler({
            email: userEmail.value,
            password: userPassword.value,
        });
    };
    render() {
        return (
            <div>
                <h3 className={styles.login}>Log here to use phonebook </h3>
                <form
                    className={formStyles.form}
                    onSubmit={this.onSubmitHandler}
                >
                    <label className={formStyles.label}>
                        Email: <br />
                        <input
                            type="email"
                            name="userEmail"
                            className={formStyles.input}
                        />
                    </label>
                    <label className={formStyles.label}>
                        Password: <br />
                        <input
                            type="password"
                            name="userPassword"
                            className={formStyles.input}
                        />
                    </label>
                    <button className={formStyles.submit} type="submit">
                        Signup!
                    </button>
                </form>
                {/* {name && <p>{`${name}, you've successed registered!`}</p>} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: authSelectors.getUser(state),
});
const mapDispatchToProps = {
    loginHandler: authOperations.loginUser,
    setAlert: alertOperations.makeAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
