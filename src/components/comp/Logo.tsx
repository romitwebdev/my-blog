import { FunctionComponent, ReactNode } from "react";
import { GiBookmarklet } from "react-icons/gi";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Logo: FunctionComponent<ReactNode> = () => {
    const { hamView, setHamView, contrast, setFilterItems } = ContextFunc();

    // toggle hamview
    function handleHamView() {
        setHamView((prevState) => !prevState);
    }

    return (
        <>
            <div className="navbar-brand" onClick={() => setFilterItems("all")}>
                <NavLink
                    className={contrast ? "nav-link trigger" : "nav-link"}
                    to="/"
                >
                    <IconContext.Provider
                        value={{
                            className: hamView
                                ? "nav-logo logo-active"
                                : "nav-logo",
                        }}
                    >
                        <GiBookmarklet />
                    </IconContext.Provider>
                    <p className={hamView ? "nav-name-active" : ""}>My Blog</p>
                </NavLink>
                <div className="ham-menu-container" onClick={handleHamView}>
                    <IconContext.Provider
                        value={{
                            className: contrast
                                ? "ham-menu active"
                                : "ham-menu",
                        }}
                    >
                        {hamView ? <IoCloseSharp /> : ""}
                    </IconContext.Provider>
                </div>
            </div>
        </>
    );
};

export default Logo;
