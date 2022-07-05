import { FunctionComponent, ReactNode, useState, useEffect } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import NavProfile from "./NavProfile";
import { ContextFunc } from "../../ContextProvider";
import { GiHamburgerMenu } from "react-icons/gi";

interface Iwidth {
    width: number;
    setWidth: () => {};
}

const Navbar: FunctionComponent<ReactNode> = () => {
    const { setHamView, hamView, contrast } = ContextFunc();
    const [width, setWidth] = useState<Iwidth["width"]>(window.innerWidth);

    // show navItems text when the width is >= 960

    function handleWidth() {
        if (width >= 960) {
            setWidth(window.innerWidth);
            setHamView(true);
        }
    }

    useEffect(() => {
        if (width >= 960) {
            setHamView(true);
        }
    }, [width]);

    window.addEventListener("resize", handleWidth);

    return (
        <>
            <nav
                className={
                    hamView
                        ? contrast
                            ? "navbar active hamview"
                            : "navbar hamview"
                        : contrast
                        ? "navbar active"
                        : "navbar"
                }
            >
                <div className="navbar-holder container">
                    <div
                        className="hamburger-menu"
                        onClick={() => setHamView(true)}
                    >
                        {hamView ? "" : <GiHamburgerMenu />}
                    </div>
                    <Logo />
                    <NavItems />
                    <NavProfile />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
