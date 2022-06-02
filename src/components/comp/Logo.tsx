import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { GiBookmarklet } from "react-icons/gi";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";
import { NavLink } from "react-router-dom";

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
                        {hamView ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
                    </IconContext.Provider>
                </div>
            </div>
        </>
    );
};

export default Logo;
