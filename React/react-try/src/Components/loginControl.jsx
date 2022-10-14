import { useState } from "react";
import Login from "./loginButton";
import Logout from "./logoutButton";
import ButtonSwitch from "./switchLogin";

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let switchbutton = (isLoggedIn) ? <Logout onClick={() => setIsLoggedIn(false)}/> : <Login onClick={() => setIsLoggedIn(true)}/>


    return(
        <>
        <ButtonSwitch isLoggedIn={isLoggedIn} />
        {switchbutton}
        </>
    );
}

export default LoginControl