import React from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth/";
import alertOperations from "../../redux/alert/alertOperations";
import formStyles from "../ContactsComponents/ContactForm.module.css";
import styles from "../App.module.css";

class Signup extends React.Component {
    onSubmitHandler = (event) => {
        event.preventDefault();
        const element = event.target;
        const userName = element.userName;
        const userEmail = element.userEmail;
        const userPassword = element.userPassword;
        if (!userName.value) {
            userName.classList.add(formStyles.inputWrong);
            this.props.setAlert("Enter name!");
            return;
        }
        userName.classList.remove(formStyles.inputWrong);
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
        if (userPassword.value.length < 7) {
            userPassword.classList.add(formStyles.inputWrong);
            this.props.setAlert("Password must be more than 6 characters!");
            return;
        }
        userPassword.classList.remove(formStyles.inputWrong);
        this.props.registerHandler({
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value,
        });
    };
    render() {
        const name = this.props.user.name;
        return (
            <div>
                <h3 className={styles.signup}>
                    Fill out registration form for starting use cloud phonebook{" "}
                </h3>
                <form
                    className={formStyles.form}
                    onSubmit={this.onSubmitHandler}
                >
                    <label className={formStyles.label}>
                        Name: <br />
                        <input
                            type="text"
                            name="userName"
                            className={formStyles.input}
                        />
                    </label>
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
                {name && <p>{`${name}, you've successed registered!`}</p>}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    user: authSelectors.getUser(state),
});
const mapDispatchToProps = {
    registerHandler: authOperations.registerUser,
    setAlert: alertOperations.makeAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
