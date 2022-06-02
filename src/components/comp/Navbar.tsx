import { FunctionComponent, ReactNode, useState, useEffect } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import NavProfile from "./NavProfile";
import { ContextFunc } from "../../ContextProvider";

interface Iwidth {
    width: number;
    setWidth: () => {};
}

const Navbar: FunctionComponent<ReactNode> = () => {
    const { setHamView, contrast } = ContextFunc();
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
            <nav className={contrast ? "navbar active" : "navbar"}>
                <div className="navbar-holder container">
                    <Logo />
                    <NavItems />
                    <NavProfile />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
