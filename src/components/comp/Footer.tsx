import { FunctionComponent, ReactNode } from "react";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiOutlineInstagram,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";

const Footer: FunctionComponent<ReactNode> = () => {
    const { contrast } = ContextFunc();
    return (
        <>
            <footer className={contrast ? "footer active" : "footer"}>
                <div className="footer-holder container">
                    <span>Terms & conditions</span>

                    <span>&copy; Copyright 2022, All rights reserved</span>

                    <div className="social-icons-holder">
                        <IconContext.Provider
                            value={{ className: "social-icons" }}
                        >
                            <AiFillTwitterCircle />
                            <AiFillLinkedin />
                            <AiOutlineInstagram />
                        </IconContext.Provider>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
