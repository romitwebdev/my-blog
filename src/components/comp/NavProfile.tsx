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
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";
import { GoKebabVertical } from "react-icons/go";
import { NavLink } from "react-router-dom";

interface Idrop {
    dropMenu: boolean;
}

const NavProfile: FunctionComponent<ReactNode> = () => {
    const { hamView, contrast, setContrast } = ContextFunc();
    const [dropMenu, setDropMenu] = useState<Idrop["dropMenu"]>(false);
    const dropRef = useRef<HTMLDivElement>(null!);

    function handleDropMenu(e: any) {
        if (!dropRef.current.contains(e.target)) {
            console.log("foo");
            setDropMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleDropMenu);

        return () => {
            document.removeEventListener("clikc", handleDropMenu);
        };
    }, []);

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
                        <p className={hamView ? "nav-name-active" : ""}>John</p>

                        <div ref={dropRef}>
                            <IconContext.Provider
                                value={{ className: "drop-menu" }}
                            >
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

                        <div className="drop-items">
                            <IconContext.Provider
                                value={{ className: "drop-icons" }}
                            >
                                <RiLoginBoxFill />
                                {/* <RiLogoutBoxFill /> */}{" "}
                                <p
                                    className={
                                        hamView
                                            ? "drop-items-list"
                                            : "drop-items-list active"
                                    }
                                >
                                    Login
                                </p>
                            </IconContext.Provider>
                        </div>
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
