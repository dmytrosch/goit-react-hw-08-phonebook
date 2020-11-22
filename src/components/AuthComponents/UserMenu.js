import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth/";
import authStyles from "./Auth.module.css";

function UserMenu() {
    const userName = useSelector((state) => authSelectors.getUser(state).name);
    const dispatch = useDispatch();
    return (
        <>
            {userName && (
                <div className={authStyles.container}>
                    <p className={authStyles.text}>{`Welcome, ${userName}!`}</p>
                    <button
                        className={authStyles.btn}
                        onClick={(event) => {
                            dispatch(authOperations.logout());
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </>
    );
}

export default UserMenu;
