import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFunc } from "../../ContextProvider";

interface IerrorMsg {
    error: { name: string; message: string };
}

const Login = () => {
    const { contrast, setLogin, users, setCurrentUser } = ContextFunc();

    const [errorMsg, setErrorMsg] = useState<IerrorMsg["error"]>({
        name: "",
        message: "",
    });

    const navigate = useNavigate();

    // takes argument from function and check the name and shows error

    const renderErrorMsg = (name: string) =>
        name === errorMsg.name && (
            <div className="error">{errorMsg.message}</div>
        );

    // handle the login form submit

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // destructure username and password from form and get input field value and check in users state

        let { username, password } = document.forms[0];

        let userData = users.find((usr) => usr.firstName === username.value);

        // if error set the errorMsg state and if not then setLogin to true, set the current user and redirect to homepage
        if (userData) {
            if (userData.password !== password.value) {
                setErrorMsg({ name: "password", message: "invalid password" });
            } else {
                setLogin(true);
                setCurrentUser(userData);
                navigate("/");
            }
        } else {
            setErrorMsg({ name: "username", message: "invalid username" });
        }
    }

    return (
        <div className={contrast ? "blogpost active" : "blogpost"}>
            <form
                action=""
                className={
                    contrast ? "form-container active" : "form-container"
                }
                onSubmit={(e) => handleSubmit(e)}
            >
                <div
                    className={contrast ? "form-header active" : "form-header"}
                >
                    <h1>Login</h1>
                </div>
                <div className="form-control">
                    <div className="form-input">
                        <input
                            type="text"
                            placeholder="username"
                            className={
                                contrast ? "form-title active" : "form-title"
                            }
                            name="username"
                        />

                        {/* if the argument matches in function it shows error */}

                        {renderErrorMsg("username")}
                    </div>
                    <div className="form-input">
                        <input
                            type="password"
                            placeholder="password"
                            className={
                                contrast ? "form-title active" : "form-title"
                            }
                            name="password"
                        />

                        {/* if the argument matches in function it shows error */}

                        {renderErrorMsg("password")}
                    </div>

                    <div className="form-input">
                        <input
                            type="submit"
                            value="Login"
                            className="form-submit-btn"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
