import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFunc } from "../../ContextProvider";

interface IerrorMsg {
    error: { name: string; message: string };
}

const Signup = () => {
    const { contrast, users, setUsers } = ContextFunc();

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

    // handle the signup form submit
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let form = document.forms[0];

        // destructure the firstname, lastname, password, confirmPassword from form and get input field value
        let { firstname, lastname, password, confirmPassword } = form;

        // checks the password and confirm password and check the password length and set the users or give error
        if (password.value === confirmPassword.value) {
            if (password.value.length >= 5) {
                let initialData = {
                    id: Date.now(),
                    firstName: firstname.value,
                    lastName: lastname.value,
                    password: password.value,
                    isAdmin: false,
                };
                setUsers([...users, initialData]);
                navigate("/login");
            } else {
                setErrorMsg({
                    name: "shortPassword",
                    message: "password should be atleast 5 character long",
                });
            }
        } else {
            setErrorMsg({
                name: "password",
                message: "password doesn't match",
            });
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
                    <h1>Create An Account</h1>
                </div>
                <div className="form-control">
                    <div className="form-input">
                        <input
                            type="text"
                            placeholder="firstname"
                            className={
                                contrast ? "form-title active" : "form-title"
                            }
                            name="firstname"
                        />
                    </div>
                    <div className="form-input">
                        <input
                            type="text"
                            placeholder="lastname"
                            className={
                                contrast ? "form-title active" : "form-title"
                            }
                            name="lastname"
                        />
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
                        {renderErrorMsg("shortPassword")}
                    </div>
                    <div className="form-input">
                        <input
                            type="password"
                            placeholder="confirm password"
                            className={
                                contrast ? "form-title active" : "form-title"
                            }
                            name="confirmPassword"
                        />
                        {/* if the argument matches in function it shows error */}
                        {renderErrorMsg("password")}
                        {renderErrorMsg("shortPassword")}
                    </div>

                    <div className="form-input">
                        <input
                            type="submit"
                            value="Create"
                            className="form-submit-btn"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
