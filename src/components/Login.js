import React from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../redux/auth/";
import styles from "./ContactForm.module.css";

class Login extends React.Component {
    onSubmitHandler = (event) => {
        event.preventDefault();
        const element = event.target;
        const userEmail = element.userEmail.value;
        const userPassword = element.userPassword.value;
        this.props.loginHandler({
            email: userEmail,
            password: userPassword,
        });
    };
    render() {
        return (
            <div>
                <h3>Log in here</h3>
                <form className={styles.form} onSubmit={this.onSubmitHandler}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
