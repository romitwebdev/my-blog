import React, {
    FunctionComponent,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import { FaUserCircle } from "react-icons/fa";
import {
    RiLoginBoxFill,
    RiLogoutBoxFill,
    RiMoonClearFill,
} from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { IoCreateSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";
import { GoKebabVertical } from "react-icons/go";
import { NavLink } from "react-router-dom";

interface Idrop {
    dropMenu: boolean;
}

interface IcurrentProps {
    initialData: {
        id: Number;
        firstName: string;
        lastName: string;
        password: string;
        isAdmin: boolean;
    };
}

let initialData: IcurrentProps["initialData"] = {
    id: 0,
    firstName: "",
    lastName: "",
    password: "",
    isAdmin: false,
};

const NavProfile: FunctionComponent<ReactNode> = () => {
    const {
        hamView,
        contrast,
        setContrast,
        currentUser,
        setCurrentUser,
        login,
        setLogin,
    } = ContextFunc();
    const [dropMenu, setDropMenu] = useState<Idrop["dropMenu"]>(false);
    const dropRef = useRef<HTMLDivElement>(null!);

    // check the dropRef and argument whenever user click outside the dropmenu

    function handleDropMenu(e: any) {
        if (!dropRef.current.contains(e.target)) {
            setDropMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleDropMenu);

        return () => {
            document.removeEventListener("clikc", handleDropMenu);
        };
    }, []);

    // set the currentUser to initial data and set login to false

    const handleLogout = () => {
        setLogin(false);
        setCurrentUser(initialData);
    };

    return (
        <>
            <div className="profile-container">
                <div className="profile-icons">
                    <div className="profile-icons-holder">
                        <IconContext.Provider
                            value={{ className: "user-icon" }}
                        >
                            <FaUserCircle />
                        </IconContext.Provider>
                        {/* checks login and show  first name */}
                        <p className={hamView ? "nav-name-active" : ""}>
                            Hello,{" "}
                            {login
                                ? currentUser.firstName
                                    ? currentUser.firstName
                                    : ""
                                : ""}
                        </p>
                        {/* adding ref to the div to check if user has clicked on drop menu or not */}

                        <div ref={dropRef}>
                            <IconContext.Provider
                                value={{ className: "drop-menu" }}
                            >
                                {/* show and hide drop menu */}
                                <GoKebabVertical
                                    onClick={() => setDropMenu(!dropMenu)}
                                />{" "}
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div
                        className={
                            dropMenu
                                ? "drop-icons-holder active"
                                : "drop-icons-holder"
                        }
                    >
                        {/* login then show add blog else nothing */}
                        {login ? (
                            <NavLink to="/blogpost" className="add-blog-link">
                                <div className="drop-items">
                                    <IconContext.Provider
                                        value={{ className: "drop-icons" }}
                                    >
                                        <BiAddToQueue />{" "}
                                    </IconContext.Provider>
                                    <p
                                        className={
                                            hamView
                                                ? "drop-items-list"
                                                : "drop-items-list active"
                                        }
                                    >
                                        Add Blog
                                    </p>
                                </div>
                            </NavLink>
                        ) : (
                            ""
                        )}

                        {!login ? (
                            <>
                                <NavLink to="/login">
                                    <div className="drop-items">
                                        <IconContext.Provider
                                            value={{ className: "drop-icons" }}
                                        >
                                            <RiLoginBoxFill />

                                            <p
                                                className={
                                                    contrast
                                                        ? hamView
                                                            ? "drop-items-list dark"
                                                            : "drop-items-list dark active"
                                                        : hamView
                                                        ? "drop-items-list"
                                                        : "drop-items-list active"
                                                }
                                            >
                                                Login
                                            </p>
                                        </IconContext.Provider>
                                    </div>
                                </NavLink>

                                <NavLink to="/signup">
                                    <div className="drop-items">
                                        <IconContext.Provider
                                            value={{ className: "drop-icons" }}
                                        >
                                            <IoCreateSharp />

                                            <p
                                                className={
                                                    contrast
                                                        ? hamView
                                                            ? "drop-items-list dark"
                                                            : "drop-items-list dark active"
                                                        : hamView
                                                        ? "drop-items-list"
                                                        : "drop-items-list active"
                                                }
                                            >
                                                Signup
                                            </p>
                                        </IconContext.Provider>
                                    </div>
                                </NavLink>
                            </>
                        ) : (
                            <div className="drop-items" onClick={handleLogout}>
                                <IconContext.Provider
                                    value={{ className: "drop-icons" }}
                                >
                                    <RiLogoutBoxFill />

                                    <p
                                        className={
                                            contrast
                                                ? hamView
                                                    ? "drop-items-list dark"
                                                    : "drop-items-list dark active"
                                                : hamView
                                                ? "drop-items-list"
                                                : "drop-items-list active"
                                        }
                                    >
                                        Logout
                                    </p>
                                </IconContext.Provider>
                            </div>
                        )}
                    </div>
                    <IconContext.Provider
                        value={{ className: "switch-contrast" }}
                    >
                        {contrast ? (
                            <BsFillSunFill onClick={() => setContrast(false)} />
                        ) : (
                            <RiMoonClearFill
                                onClick={() => setContrast(true)}
                            />
                        )}
                    </IconContext.Provider>
                </div>
            </div>
        </>
    );
};

export default NavProfile;
