import React from "react";
import styles from "./App.module.css";

import AppBar from "./AppBar";

function Layout(props) {
    return (
        <div className={styles.container} style={props.styling}>
            <AppBar />
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;
