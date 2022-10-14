import React from "react";

    const ButtonSwitch = (props) => {
        console.log(props)
        const isLoggedIn = props.isLoggedIn;

        if(isLoggedIn){
            console.log("I know this is logged in");
            return <h1> WELCOME BACK! </h1>;
        }
            console.log("i hope this is logged out");
            return <h1> PLEASE SIGN UP!</h1>;
    };

    export default ButtonSwitch;