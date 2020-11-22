import React from "react";
import Loader from "react-loader-spinner";

const styles = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
};
export default function () {
    return (
        <Loader
            style={styles}
            type="Puff"
            color="#4949b8"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    );
}
