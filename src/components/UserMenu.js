import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../redux/auth/";

function UserMenu() {
    const userName = useSelector((state) => authSelectors.getUser(state).name);
    const dispatch = useDispatch();
    return (
        <>
            {userName && (
                <div>
                    <h3>{`Welcome, ${userName}!`}</h3>
                    <button
                        onClick={(event) => {
                            console.log(event);
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
