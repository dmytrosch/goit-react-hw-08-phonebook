import React from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../redux/auth/";
import styles from "./ContactForm.module.css";

class Signup extends React.Component {
    onSubmitHandler = (event) => {
        event.preventDefault();
        const element = event.target;
        const userName = element.userName.value;
        const userEmail = element.userEmail.value;
        const userPassword = element.userPassword.value;
        this.props.registerHandler({
            name: userName,
            email: userEmail,
            password: userPassword,
        });
    };
    render() {
        const name = this.props.user.name;
        return (
            <div>
                <h3>Fill out registration form</h3>
                <form className={styles.form} onSubmit={this.onSubmitHandler}>
                    <label className={styles.label}>
                        Name: <br />
                        <input
                            type="text"
                            name="userName"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Email: <br />
                        <input
                            type="email"
                            name="userEmail"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Password: <br />
                        <input
                            type="password"
                            name="userPassword"
                            className={styles.input}
                        />
                    </label>
                    <button className={styles.submit} type="submit">
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
